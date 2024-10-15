// Datos de ejemplo en formato JSON
const speciesData = [
  {
    nombreCientifico: "Sciurus vulgaris",
    nombreComun: "Ardilla roja",
    manejo: "Cautiverio controlado con alimentación variada...",
    dieta: "Frutas, semillas, pequeños insectos...",
    comportamiento: "Animal diurno, muy social en su hábitat...",
    anestesia: "Se recomienda ketamina en pequeñas dosis...",
    problemas: "Problemas respiratorios comunes en cautiverio...",
    tratamientos: "Tratamiento antibiótico para infecciones comunes...",
    diagnostico: "Radiografías para verificar problemas óseos...",
    curiosidades: "Especie muy activa durante el otoño...",
    imagen: "https://via.placeholder.com/300x200"  // Puedes cambiar la URL de la imagen
  }
];

// Función para cargar las especies
function cargarEspecies() {
    const container = document.getElementById('species-container');
    speciesData.forEach(especie => {
        const ficha = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${especie.imagen}" class="card-img-top" alt="${especie.nombreComun}">
                    <div class="card-body">
                        <h5 class="card-title">${especie.nombreComun} (${especie.nombreCientifico})</h5>
                        <p class="card-text"><strong>Manejo:</strong> ${especie.manejo}</p>
                        <p class="card-text"><strong>Dieta:</strong> ${especie.dieta}</p>
                        <p class="card-text"><strong>Comportamiento:</strong> ${especie.comportamiento}</p>
                        <p class="card-text"><strong>Anestesia:</strong> ${especie.anestesia}</p>
                        <p class="card-text"><strong>Problemas comunes:</strong> ${especie.problemas}</p>
                        <p class="card-text"><strong>Tratamientos:</strong> ${especie.tratamientos}</p>
                        <p class="card-text"><strong>Diagnóstico:</strong> ${especie.diagnostico}</p>
                        <p class="card-text"><strong>Datos Curiosos:</strong> ${especie.curiosidades}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += ficha;
    });
}

// Cargar las especies cuando la página se carga
window.onload = cargarEspecies;
