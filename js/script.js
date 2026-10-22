import { $, pedir, mostrarIcono } from "./utilidades.js";

const listado = $("#listado-proyectos")
const desdeGitHub = await pedir("https://api.github.com/users/jfaquinopando/repos?sort=updated&per_page=9")
const insertar = desdeGitHub.map(
    function (repositorio, indice) {
        return `<article class="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_22px_60px_rgba(40,35,27,.09)]">
                    <img class="aspect-video w-full bg-[var(--soft-red)] object-cover"
                        src="https://www.redoyanulhaque.me/images/Phoenix3.0.png"
                        alt="Vista previa del repositorio ${repositorio.name}" loading="lazy" width="800" height="450">
                    <div class="p-6">
                        <h3 class="mb-3 text-xl font-bold">${repositorio.name}</h3>
                        <p class="mb-4 text-[var(--muted)]">
                            ${repositorio.description}
                        </p>
                        <div class="flex flex-wrap gap-2" aria-label="Tecnologías">
                            <span class="rounded-full bg-[var(--soft-red)] px-3 py-1 text-xs font-bold text-[var(--red-dark)]">${repositorio.language}</span>
                        </div>
                    </div>
                </article>`
    }
)

listado.insertAdjacentHTML("afterbegin", insertar.join(""))