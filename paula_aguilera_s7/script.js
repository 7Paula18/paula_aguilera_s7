// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// ============================================

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "FinTech Asset Manager";
const VALUE_LABEL = "Capital Invertido";
const TAX_RATE = 0.15; // IVA 

const assets = [
  { id: 1, name: "Bitcoin (BTC)",    category: "Cripto",   value: 25000000, active: true },
  { name: "Ethereum (ETH)",   category: "Cripto",   value: 12000000, active: true },
  { name: "Acciones Apple",   category: "Acciones", value: 8500000,  active: false },
  { name: "CDT Bancolombia",  category: "Ahorro",   value: 15000000, active: true },
  { name: "Fondo Global",     category: "Inversión",value: 5000000,  active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// Recibe un activo y devuelve un string elegante para el reporte
const formatAsset = (asset) => {
  const statusIcon = asset.active ? "🟢" : "🔴";
  return `${statusIcon} ${asset.name.padEnd(15)} | Tipo: ${asset.category.padEnd(10)} | Monto: $${asset.value.toLocaleString('es-CO')}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el rendimiento proyectado. Es pura porque no depende de variables externas.
const calculateYield = (amount, yieldPct = 0.10) => {
  return +(amount * (1 + yieldPct)).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Verifica si el activo está habilitado para operar
const isOperable = (asset) => asset.active === true && asset.value > 0;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Formatea el valor con moneda y etiqueta, usando COP por defecto
const formatCurrency = (value, label = VALUE_LABEL, currency = "COP") => {
  const formattedNumber = new Intl.NumberFormat('es-CO').format(value);
  return `${label}: ${currency} $${formattedNumber}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(50)}`);
console.log(`      📊 SISTEMA DE GESTIÓN — ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"═".repeat(50)}`);

if (assets.length === 0) {
  console.log("\n⚠️  No hay activos registrados en el portafolio.");
} else {
  // --- Listado Dinámico ---
  console.log("\n📋 ESTADO ACTUAL DEL PORTAFOLIO:");
  let i = 1;
  for (const asset of assets) {
    console.log(`  ${i}. ${formatAsset(asset)}`);
    i++;
  }

  // --- Validación de Activos Operables ---
  let operableCount = 0;
  for (const asset of assets) {
    if (isOperable(asset)) {
      operableCount++;
    }
  }
  console.log(`\n✅ Activos listos para operar: ${operableCount} de ${assets.length}`);

  // --- Cálculo de Proyección ---
  let totalPortfolioValue = 0;
  let totalProjectedValue = 0;

  for (const asset of assets) {
    if (asset.active) {
      totalPortfolioValue += asset.value;
      // Calculamos proyección con un rendimiento del 15% (0.15)
      totalProjectedValue += calculateYield(asset.value, 0.15);
    }
  }

  console.log(`\n📈 RESUMEN FINANCIERO:`);
  console.log(`  > ${formatCurrency(totalPortfolioValue)}`);
  console.log(`  > ${formatCurrency(totalProjectedValue, "Proyección a 1 año")}`);
}

console.log(`\n${"═".repeat(50)}`);
console.log(`       © 2026 FinTech Manager`);
console.log(`${"═".repeat(50)}\n`);
