// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// ============================================

// Función auxiliar para precios en COP
const formatCOP = (n) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(n);

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const assets = [
  { name: "Bitcoin (BTC)", category: "Cripto", value: 25000000 },
  { name: "Ethereum (ETH)", category: "Cripto", value: 12000000 },
  { name: "Acciones Apple", category: "Acciones", value: 8500000 },
  { name: "Acciones Ecopetrol", category: "Acciones", value: 3200000 },
  { name: "CDT Bancolombia", category: "Ahorro", value: 15000000 },
  { name: "Fondo de Emergencia", category: "Ahorro", value: 5000000 }
];

const categories = ["Cripto", "Acciones", "Ahorro"];
const valueLabel = "Capital Invertido";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== 📜 LISTADO DE ACTIVOS FINANCIEROS ===");

let lineNumber = 0;
for (const asset of assets) {
  lineNumber++;
  console.log(`${lineNumber}. ${asset.name.padEnd(20)} | Tipo: ${asset.category.padEnd(10)} | ${formatCOP(asset.value)}`);
}
console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== 📈 CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;
  for (const asset of assets) {
    if (asset.category === category) count++;
  }
  console.log(`${category.padEnd(10)}: ${count} activo(s) registrado(s)`);
}
console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== 📊 ESTADÍSTICAS DEL PORTAFOLIO ===");

let totalValue = 0;
for (const asset of assets) {
  totalValue += asset.value;
}

const averageValue = assets.length > 0 ? totalValue / assets.length : 0;

console.log(`Capital Total:    ${formatCOP(totalValue)}`);
console.log(`Valor Promedio:   ${formatCOP(averageValue)}`);
console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== 🏆 MEJOR Y MENOR INVERSIÓN ===");

let maxAsset = assets[0] ?? null;
let minAsset = assets[0] ?? null;

if (assets.length > 0) {
  for (const asset of assets) {
    if (asset.value > maxAsset.value) maxAsset = asset;
    if (asset.value < minAsset.value) minAsset = asset;
  }

  console.log(`Mayor Inversión: ${maxAsset?.name} (${formatCOP(maxAsset?.value)})`);
  console.log(`Menor Inversión: ${minAsset?.name} (${formatCOP(minAsset?.value)})`);
}
console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== 📑 ANÁLISIS RESPECTO AL PROMEDIO ===");

for (let i = 0; i < assets.length; i++) {
  const asset = assets[i];
  
  // Determinamos si está sobre o bajo el promedio del portafolio
  const comparison = asset.value >= averageValue ? "⬆️ SOBRE EL PROMEDIO" : "⬇️ BAJO EL PROMEDIO";

  console.log(`${i + 1}. ${asset.name.padEnd(20)} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE FINANCIERO ===");