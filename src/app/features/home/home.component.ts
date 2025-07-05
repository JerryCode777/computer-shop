// src\app\features\home\home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductCatalogComponent } from '../product-catalog/product-catalog.component';
import { FeaturedCatalogComponent } from '../../shared/components/featured-catalog/featured-catalog.component';
import { Catalog } from '../../shared/models/catalog.model';
import { Product } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, CarouselModule, ProductCardComponent, ProductCatalogComponent, FeaturedCatalogComponent]
})
export class HomeComponent {
  responsiveCarouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };
  
  carouselOptions = {
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true
  };

  banners = [
    {
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      title: 'Ofertas Especiales',
      subtitle: 'Hasta 50% de descuento en productos seleccionados'
    },
    {
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      title: 'Nuevos Lanzamientos',
      subtitle: 'Descubre nuestros últimos modelos'
    },
    {
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      title: 'Temporada de Rebajas',
      subtitle: 'Aprovecha nuestras mejores ofertas tecnológicas'
    }
  ];

  featuredCatalogs: Catalog[] = [
    {
      id: 'laptops',
      title: 'Laptops',
      description: 'Descubre nuestra gama de computadoras portátiles',
      imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      route: '/products',
      productCount: 150
    },
    {
      id: 'computadoras',
      title: 'Computadoras',
      description: 'Equipos de escritorio para todas tus necesidades',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      route: '/products',
      productCount: 120
    },
    {
      id: 'accesorios',
      title: 'Accesorios',
      description: 'Complementa tu equipo con nuestros accesorios',
      imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      route: '/products',
      productCount: 80
    }
  ];

  featuredProducts: Product[] = [
    {
      id: 39,
      title: "MacBook Pro 14\"",
      description: "Potente laptop con chip M1 Pro, pantalla Liquid Retina XDR y hasta 32GB de RAM.",
      brand: "Apple",
      skus: [
          {
              id: 39,
              skuCode: "MBP14 M1 16GB",
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
      id: 40,
      title: "Dell XPS 15",
      description: "Laptop premium con pantalla InfinityEdge y procesador Intel Core i9.",
      brand: "Dell",
      skus: [
          {
              id: 40,
              skuCode: "XPS15 i9 32GB",
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
      id: 41,
      title: "Logitech MX Master 3",
      description: "Ratón ergonómico avanzado con scroll electromagnético y conexión multi-dispositivo.",
      brand: "Logitech",
      skus: [
          {
              id: 41,
              skuCode: "MXM3 Black",
              color: "Black",
              size: "Standard",
              price: 99,
              discountedPrice: 79,
              discontPercent: 20,
              quantity: 30
          }
      ],
      imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
    },
    {
      id: 42,
      title: "Samsung Odyssey G7",
      description: "Monitor gaming curvo QHD de 27\" con 240Hz y tecnología QLED.",
      brand: "Samsung",
      skus: [
          {
              id: 42,
              skuCode: "G7 27\"",
              color: "Black",
              size: "27\"",
              price: 699,
              discountedPrice: 599,
              discontPercent: 14,
              quantity: 8
          }
      ],
      imageUrl: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80"
    }
  ];
}