import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

// ============================================================
// MIDDLEWARES
// ============================================================
app.use(express.json({ limit: "1mb" }));

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:3000",
  "http://localhost:4173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const isLocalhost =
        /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
      const isAllowed = allowedOrigins.includes(origin);

      if (isLocalhost || isAllowed) {
        callback(null, true);
      } else {
        console.warn(`⚠️ CORS bloqué pour : ${origin}`);
        callback(new Error("Non autorisé par CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

// ============================================================
// RATE LIMIT
// ============================================================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Trop de messages envoyés. Réessayez dans 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ============================================================
// TRANSPORTER NODEMAILER
// ============================================================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("❌ Erreur SMTP :", error.message);
    console.error("   → Vérifie EMAIL_USER et EMAIL_PASS dans .env");
  } else {
    console.log("✅ Serveur prêt à envoyer des emails");
  }
});

// ============================================================
// ROUTES
// ============================================================

app.get("/", (req, res) => {
  res.json({
    status: "API opérationnelle ✅",
    endpoints: {
      contact: "POST /api/contact",
      health: "GET /api/health",
    },
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// POST /api/contact
// Accepte { name, email, subject?, message }
// Compatible aussi avec { nom } pour d'autres frontends
// ============================================================
app.post("/api/contact", limiter, async (req, res) => {
  console.log("📩 Requête reçue :", req.body);

  const name = req.body.name || req.body.nom;
  const { email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Champs obligatoires manquants (name, email, message).",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Adresse email invalide." });
  }

  const escape = (str = "") =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escape(name);
  const safeEmail = escape(email);
  const safeSubject = escape(subject);
  const safeMessage = escape(message).replace(/\n/g, "<br>");

  try {
    const info = await transporter.sendMail({
      from: `"${safeName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: subject
        ? ` ${safeSubject}`
        : ` Kivustay - ${safeName}`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau message — Kivustay Hotel</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">

  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f3f4f6;padding:40px 20px;">
    <tr>
      <td align="center">

        <!-- ============ CARTE PRINCIPALE ============ -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#ea580c 0%,#f97316 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">
                🏨 Kivustay Hotel
              </h1>
              <p style="margin:8px 0 0 0;color:#ffedd5;font-size:14px;">
                Nouveau message de contact
              </p>
            </td>
          </tr>

          <!-- CORPS -->
          <tr>
            <td style="padding:40px 30px;">

              <p style="margin:0 0 24px 0;color:#374151;font-size:16px;line-height:1.6;">
                Vous avez reçu un nouveau message via le formulaire de contact de votre site.
              </p>

              <!-- BLOC INFOS -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#fef3c7;border-left:4px solid #ea580c;border-radius:8px;">
                <tr>
                  <td style="padding:20px;">

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:12px;">
                      <tr>
                        <td width="90" style="color:#92400e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                          👤 Nom
                        </td>
                        <td style="color:#1f2937;font-size:15px;font-weight:600;">
                          ${safeName}
                        </td>
                      </tr>
                    </table>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:12px;">
                      <tr>
                        <td width="90" style="color:#92400e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                          ✉️ Email
                        </td>
                        <td style="color:#1f2937;font-size:15px;">
                          <a href="mailto:${safeEmail}" style="color:#ea580c;text-decoration:none;font-weight:500;">
                            ${safeEmail}
                          </a>
                        </td>
                      </tr>
                    </table>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td width="90" style="color:#92400e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                          📌 Sujet
                        </td>
                        <td style="color:#1f2937;font-size:15px;">
                          ${safeSubject || "<em style='color:#9ca3af;'>Non précisé</em>"}
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- TITRE MESSAGE -->
              <h2 style="margin:32px 0 16px 0;color:#111827;font-size:18px;font-weight:700;border-bottom:2px solid #ea580c;padding-bottom:8px;display:inline-block;">
                💬 Message
              </h2>

              <!-- CONTENU MESSAGE -->
              <div style="background-color:#f9fafb;border-radius:12px;padding:24px;margin-top:16px;">
                <p style="margin:0;color:#374151;font-size:15px;line-height:1.7;white-space:pre-wrap;">
${safeMessage}
                </p>
              </div>

              <!-- BOUTON RÉPONDRE -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re: ${safeSubject || 'Votre message'}"
                       style="display:inline-block;background:linear-gradient(135deg,#ea580c 0%,#f97316 100%);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:8px;box-shadow:0 4px 12px rgba(234,88,12,0.3);">
                      ✉️ Répondre à ${safeName}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#1f2937;padding:24px 30px;text-align:center;">
              <p style="margin:0 0 8px 0;color:#9ca3af;font-size:12px;">
                © ${new Date().getFullYear()} Kivustay Hotel — Tous droits réservés
              </p>
              <p style="margin:0;color:#6b7280;font-size:11px;">
                Email automatique envoyé depuis le formulaire de contact du site
              </p>
            </td>
          </tr>

        </table>

        <!-- MENTION DATE -->
        <p style="margin:20px 0 0 0;color:#9ca3af;font-size:11px;text-align:center;">
          Reçu le ${new Date().toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" })}
        </p>

      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    console.log("✅ Email envoyé :", info.messageId);
    res.status(200).json({ success: "Message envoyé avec succès !" });
  } catch (err) {
    console.error("❌ Erreur envoi :", err.message);
    res.status(500).json({
      error: "Erreur lors de l'envoi. Réessayez plus tard.",
    });
  }
});

// ============================================================
// 404
// ============================================================
app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.originalUrl} introuvable`,
    hint: "Vérifie l'URL ou la méthode HTTP utilisée.",
    availableRoutes: ["GET  /", "GET  /api/health", "POST /api/contact"],
  });
});

// ============================================================
// GESTION D'ERREURS GLOBALE
// ============================================================
app.use((err, req, res, next) => {
  console.error("❌ Erreur serveur :", err.message);
  res.status(500).json({ error: "Erreur interne du serveur." });
});

// ============================================================
// DÉMARRAGE
// ============================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("═══════════════════════════════════════════");
  console.log(`🚀 Serveur sur http://localhost:${PORT}`);
  console.log(`📧 Email : ${process.env.EMAIL_USER || "❌ non défini"}`);
  console.log(`📥 Destinataire : ${process.env.RECIPIENT_EMAIL || "❌ non défini"}`);
  console.log("═══════════════════════════════════════════");
});