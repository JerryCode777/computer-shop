// src\app\features\product-catalog\product-catalog.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/services/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, ProductCardComponent]
})
export class ProductCatalogComponent {
    products: Product[] = [
    {
      id: 101,
      title: "MacBook Pro 14\" M1 Pro",
      description: "Laptop profesional con chip M1 Pro, pantalla Liquid Retina XDR de 14.2\" y hasta 32GB de RAM unificada.",
      brand: "Apple",
      skus: [
          {
              id: 101,
              skuCode: "MBP14-M1-16GB",
              color: "Space Gray",
              size: "14\"",
              price: 2499,
              discountedPrice: 2299,
              discontPercent: 8,
              quantity: 15
          }
      ],
      imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
    },
    {
      id: 102,
      title: "Dell XPS 15",
      description: "Laptop premium con pantalla InfinityEdge 4K, procesador Intel Core i9 y gráficos NVIDIA RTX.",
      brand: "Dell",
      skus: [
          {
              id: 102,
              skuCode: "XPS15-i9-32GB",
              color: "Platinum",
              size: "15.6\"",
              price: 2199,
              discountedPrice: 1999,
              discontPercent: 9,
              quantity: 12
          }
      ],
      imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
    },
    {
      id: 103,
      title: "HP Spectre x360",
      description: "Convertible 2-en-1 con pantalla táctil OLED 4K, procesador Intel Core i7 y diseño premium.",
      brand: "HP",
      skus: [
          {
              id: 103,
              skuCode: "SPECTRE-i7-16GB",
              color: "Nightfall Black",
              size: "13.5\"",
              price: 1499,
              discountedPrice: 1299,
              discontPercent: 13,
              quantity: 18
          }
      ],
      imageUrl: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
    },
    {
      id: 104,
      title: "Asus ROG Zephyrus G14",
      description: "Laptop gaming potente con GPU NVIDIA RTX 3060, procesador AMD Ryzen 9 y pantalla QHD 120Hz.",
      brand: "Asus",
      skus: [
          {
              id: 104,
              skuCode: "G14-R9-3060",
              color: "Moonlight White",
              size: "14\"",
              price: 1799,
              discountedPrice: 1599,
              discontPercent: 11,
              quantity: 10
          }
      ],
      imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
    }
  ];
}