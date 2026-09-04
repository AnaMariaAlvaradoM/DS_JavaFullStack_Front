import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  edad: number;
  dueno: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/mascotas';

  private listaMascotas = signal<Mascota[]>([]);
  mascotas = this.listaMascotas.asReadonly();

  private idsFavoritos = signal<Set<number>>(new Set());
  totalFavoritos = computed(() => this.idsFavoritos().size);

  constructor() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.http.get<Mascota[]>(this.apiUrl).subscribe(datos => {
      this.listaMascotas.set(datos);
    });
  }

  esFavorito(id: number): boolean {
    return this.idsFavoritos().has(id);
  }

  alternarFavorito(id: number) {
    this.idsFavoritos.update(actuales => {
      const nuevos = new Set(actuales);
      if (nuevos.has(id)) {
        nuevos.delete(id);
      } else {
        nuevos.add(id);
      }
      return nuevos;
    });
  }
}