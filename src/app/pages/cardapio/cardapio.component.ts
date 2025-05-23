import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaCorPipe } from '../../pipes/categoria-cor.pipe'; // ajuste o caminho se necessário

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
    { nome: 'Milho', preco: 8.5, categoria: 'Entrada', disponivel: true },
    { nome: 'Bolinho de costela', preco: 24, categoria: 'Entrada', disponivel: true },
    { nome: 'Crepe de Frango', preco: 16, categoria: 'Entrada', disponivel: false },
    { nome: 'Lasanha', preco: 42, categoria: 'Principal', disponivel: true },
    { nome: 'Frango a Passarinho', preco: 48.5, categoria: 'Principal', disponivel: false },
    { nome: 'Frango Grelhado', preco: 40, categoria: 'Principal', disponivel: true },
    { nome: 'Picanha', preco: 76, categoria: 'Principal', disponivel: true },
    { nome: 'Tutu de feijão', preco: 39, categoria: 'Principal', disponivel: false },
    { nome: 'Coxinha de doce de leite', preco: 22.9, categoria: 'Sobremesa', disponivel: false },
    { nome: 'Pudim', preco: 12.5, categoria: 'Sobremesa', disponivel: true },
    { nome: 'Petit Gâteau', preco: 18, categoria: 'Sobremesa', disponivel: true },
    { nome: 'Mousse de Uva', preco: 10, categoria: 'Sobremesa', disponivel: false },
    { nome: 'Refrigerante', preco: 6, categoria: 'Bebida', disponivel: true },
    { nome: 'Suco Natural', preco: 10, categoria: 'Bebida', disponivel: true },
    { nome: 'Água com Gás', preco: 5, categoria: 'Bebida', disponivel: true },
    { nome: 'Vinho', preco: 28, categoria: 'Bebida', disponivel: false },
    { nome: 'Cerveja', preco: 12, categoria: 'Bebida', disponivel: true }
  ];

}
