import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { CategoriaCorPipe } from '../../pipes/categoria-cor.pipe';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  imports: [CommonModule, CategoriaCorPipe]
})

interface Prato {
  nome: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  imports: [CommonModule, CategoriaCorPipe]
})
export class CardapioComponent {

  pratos: Prato[] = [
    { nome: 'Pão', preco: 1.5, categoria: 'Entrada', disponivel: true },
    { nome: 'Frango', preco: 20, categoria: 'Entrada', disponivel: true },
    { nome: 'Crepe', preco: 16, categoria: 'Entrada', disponivel: false },
    { nome: 'Lasanha', preco: 42, categoria: 'Principal', disponivel: true },
    { nome: 'Bacon e Fritas', preco: 48.5, categoria: 'Principal', disponivel: false },
    { nome: 'Frango Grelhado', preco: 36, categoria: 'Principal', disponivel: true },
    { nome: 'Contra-filé', preco: 65.9, categoria: 'Principal', disponivel: true },
    { nome: 'Palmito', preco: 39, categoria: 'Principal', disponivel: false },
    { nome: 'Mandioca frita', preco: 22.9, categoria: 'Entrada', disponivel: false },
    { nome: 'Pudim de Leite', preco: 12.5, categoria: 'Sobremesa', disponivel: true },
    { nome: 'Sorvete', preco: 18, categoria: 'Sobremesa', disponivel: true },
    { nome: 'Mousse de Uva', preco: 18, categoria: 'Sobremesa', disponivel: false },
    { nome: 'Refrigerante', preco: 6, categoria: 'Bebida', disponivel: true },
    { nome: 'Suco Natural', preco: 8.5, categoria: 'Bebida', disponivel: true },
    { nome: 'Água com Gás', preco: 4.5, categoria: 'Bebida', disponivel: true },
    { nome: 'Vinho seco', preco: 32, categoria: 'Bebida', disponivel: false },
    { nome: 'Cerveja', preco: 15, categoria: 'Bebida', disponivel: true }
  ];

}
