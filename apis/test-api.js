// test-api.js
const API_URL = process.env.API_URL || "http://localhost:5000";

// ============================================================
// Test 1 : GET /
// ============================================================
const testRoot = async () => {
  console.log("🔍 Test 1 : GET /");
  try {
    const res = await fetch(`${API_URL}/`);
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200 && data.status?.includes("opérationnelle");
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// Test 2 : GET /api/health
// ============================================================
const testHealth = async () => {
  console.log("\n🔍 Test 2 : GET /api/health");
  try {
    const res = await fetch(`${API_URL}/api/health`);
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200 && data.status === "healthy";
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// Test 3 : POST /api/contact (format ContactForm.jsx)
// ============================================================
const testContact = async () => {
  console.log("\n🔍 Test 3 : POST /api/contact (format ContactForm)");
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test ContactForm",
        email: "test@example.com",
        subject: "Test depuis test-api.js",
        message:
          "Ceci est un test automatique du formulaire ContactForm. Si tu reçois ce mail, tout fonctionne ! 🎉",
      }),
    });
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200 && !!data.success;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// Test 4 : POST /api/contact (avec "nom" — compatibilité)
// ============================================================
const testContactNom = async () => {
  console.log("\n🔍 Test 4 : POST /api/contact (champ 'nom')");
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: "Test Compatibilité",
        email: "test@example.com",
        message: "Test avec le champ 'nom' (compatibilité ancienne API).",
      }),
    });
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200 && !!data.success;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// Test 5 : POST /api/contact (données invalides → 400)
// ============================================================
const testContactInvalid = async () => {
  console.log("\n🔍 Test 5 : POST /api/contact (données invalides)");
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", email: "pas-un-email", message: "" }),
    });
    const data = await res.json();
    console.log(`   Status: ${res.status} (attendu: 400)`);
    console.log(`   Réponse:`, data);
    return res.status === 400 && !!data.error;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// Test 6 : POST /api/contact (email invalide → 400)
// ============================================================
const testContactBadEmail = async () => {
  console.log("\n🔍 Test 6 : POST /api/contact (email invalide)");
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Jean Test",
        email: "email-sans-arobase",
        message: "Test email invalide",
      }),
    });
    const data = await res.json();
    console.log(`   Status: ${res.status} (attendu: 400)`);
    console.log(`   Réponse:`, data);
    return res.status === 400 && !!data.error;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// Test 7 : Route inexistante → 404
// ============================================================
const test404 = async () => {
  console.log("\n🔍 Test 7 : GET /api/inexistant (attendu: 404)");
  try {
    const res = await fetch(`${API_URL}/api/inexistant`);
    const data = await res.json();
    console.log(`   Status: ${res.status} (attendu: 404)`);
    console.log(`   Réponse:`, data);
    return res.status === 404 && !!data.message;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

// ============================================================
// RUNNER
// ============================================================
const runAllTests = async () => {
  console.log("═══════════════════════════════════════════");
  console.log("🧪 TESTS DE L'API CONTACT");
  console.log(`🌐 Cible : ${API_URL}`);
  console.log("═══════════════════════════════════════════\n");

  const results = {
    "GET  /": await testRoot(),
    "GET  /api/health": await testHealth(),
    "POST /api/contact (ContactForm)": await testContact(),
    "POST /api/contact (nom)": await testContactNom(),
    "POST /api/contact (invalide)": await testContactInvalid(),
    "POST /api/contact (email invalide)": await testContactBadEmail(),
    "GET  /api/inexistant (404)": await test404(),
  };

  console.log("\n═══════════════════════════════════════════");
  console.log("📊 RÉSULTATS");
  console.log("═══════════════════════════════════════════");

  Object.entries(results).forEach(([name, success]) => {
    console.log(`${success ? "✅" : "❌"} ${name}`);
  });

  const passed = Object.values(results).filter(Boolean).length;
  const total = Object.values(results).length;

  console.log("───────────────────────────────────────────");
  console.log(`   ${passed}/${total} tests réussis`);
  console.log("═══════════════════════════════════════════\n");

  const allPassed = passed === total;
  process.exit(allPassed ? 0 : 1);
};

runAllTests();