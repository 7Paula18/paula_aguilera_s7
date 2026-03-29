// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "FinTech Asset Manager"; 
const VALUE_LABEL = "activos financieros";     

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

const items = [
  { id: 1, name: "Bitcoin",       value: 25000000, active: true,  risk: "Alto",     type: "Cripto" },
  { id: 2, name: "Ethereum",      value: 12000000, active: true,  risk: "Alto",     type: "Cripto" },
  { id: 3, name: "Acciones Apple", value: 8500000,  active: false, risk: "Medio",    type: "Acciones" },
  { id: 4, name: "CDT Global",    value: 15000000, active: true,  risk: "Bajo",     type: "Ahorro" },
  { id: 5, name: "Fondo Inmobiliario", value: 5000000, active: true, risk: "Medio", type: "Inversión" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Activo agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`🗑️ Último activo eliminado: ${removed ? removed.name : "Ninguno"}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Activo prioritario insertado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  if (index >= 0 && index < items.length) {
    const removed = items.splice(index, 1);
    console.log(`Eliminado en posición ${index}: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  // Filtramos solo los que tienen active: true
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  const status = item.active ? "✅" : "❌";
  const price = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(item.value);
  return `[ID: ${item.id}] ${status} ${item.name.padEnd(18)} | ${item.type.padEnd(10)} | ${price}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(60)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(60)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- 🛠️ Operaciones de mutación ---\n");

// 1. Agregar nuevo
addItem({ id: 6, name: "Cardano (ADA)", value: 2000000, active: true, risk: "Alto", type: "Cripto" });

// 2. Agregar prioridad (al inicio)
addPriorityItem({ id: 0, name: "Reserva Federal", value: 50000000, active: true, risk: "Nulo", type: "Reserva" });

// 3. Eliminar por índice (el que esté en la posición 3)
removeByIndex(3);

// 4. Quitar el último
removeLastItem();

console.log("\n--- 📈 Inventario actualizado ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- 🔍 Búsqueda y filtrado ---\n");

const search = "Bitcoin";
const found = findByName(search);
console.log(`🔎 Buscando "${search}": ${found ? "Encontrado - Valor: " + found.value : "No encontrado"}`);

const activeAssets = getActiveItems();
console.log(`💡 Activos habilitados para trading: ${activeAssets.length}`);

console.log("\n--- 🔄 Transformación con map ---\n");

// Crear array de solo nombres
const nameList = items.map(item => item.name);
console.log(`Nombres registrados: ${nameList.join(", ")}`);

// Crear array con proyección de rendimiento (Valor + 10%)
const projectedValues = items.map(item => ({
  nombre: item.name,
  proyeccion: item.value * 1.10
}));
console.log("Muestra de proyección (primeros 2):", projectedValues.slice(0, 2));

console.log("\n--- 🏁 Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Activos operables: ${activeCount} | En pausa: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(60)}`);
console.log("✅ Reporte completado exitosamente");
console.log(`${"=".repeat(60)}\n`);
