// ============================================
// PROYECTO SEMANA 05: Clasificador
// ============================================

// --- FUNCIÓN DE FORMATEO (PESOS COLOMBIANOS) ---
// Esta función convierte un número en formato: $ 1.000.000,00
const formatCOP = (valor) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(valor);
};

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Portafolio Cripto Pro"; 
const elementStatus = "active";              
const elementValue = 15000000;              // 15 millones de pesos
const elementType = "high-risk";            // Categoría de riesgo
const elementInfo = {                       // Objeto opcional
    broker: "Binance Co",
    lastUpdate: "2026-03-28"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;
if (elementValue >= 50000000) {
    classification = "💎 Inversionista VIP";
} else if (elementValue >= 10000000) {
    classification = "📈 Inversionista Avanzado";
} else if (elementValue >= 1000000) {
    classification = "🌱 Inversionista Junior";
} else {
    classification = "🥚 Principiante";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Si el status es 'active' muestra 'Habilitado', de lo contrario 'Suspendido'
const statusLabel = elementStatus === "active" ? "Habilitado" : "Suspendido";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;
switch (elementType) {
    case "low-risk":
        typeLabel = "Seguro (Bonos/CDT)";
        break;
    case "mid-risk":
        typeLabel = "Moderado (Acciones)";
        break;
    case "high-risk":
        typeLabel = "Arriesgado (Cripto/Forex)";
        break;
    default:
        typeLabel = "No definido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// Si elementName es null o undefined, usa el fallback
const displayName = elementName ?? "Activo sin nombre";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// Accedemos a broker solo si elementInfo existe
const brokerName = elementInfo?.broker ?? "Broker no asignado";
const lastDate = elementInfo?.lastUpdate ?? "Sin registro de fecha";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(45));
console.log("💳 FINTECH MANAGER - REPORTE DE ESTADO");
console.log("=".repeat(45));
console.log(`Nombre del Activo:  ${displayName}`);
console.log(`Estado Actual:      ${statusLabel}`);
console.log(`Valor Invertido:    ${formatCOP(elementValue)}`); // Uso de la función COP
console.log(`Clasificación:      ${classification}`);
console.log(`Perfil de Riesgo:   ${typeLabel}`);
console.log(`Entidad Broker:     ${brokerName}`);
console.log(`Última Actualización: ${lastDate}`);
console.log("=".repeat(45));