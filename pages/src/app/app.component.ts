import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;

  images = [
    {
      title: 'Paper',
      url: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },

    {
      title: 'Ink',
      url: 'https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    },

    {
      title: 'Brush',
      url: 'https://images.unsplash.com/photo-1645179115236-776fa645f00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },

    {
      title: 'Letters',
      url: 'https://images.unsplash.com/photo-1545038522-9bb451739ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
      title: 'Paper',
      url: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },

    {
      title: 'Ink',
      url: 'https://images.unsplash.com/photo-1501975558162-0be7b8ca95ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    },

    {
      title: 'Brush',
      url: 'https://images.unsplash.com/photo-1645179115236-776fa645f00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },

    {
      title: 'Letters',
      url: 'https://images.unsplash.com/photo-1545038522-9bb451739ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
      title: 'Brush',
      url: 'https://images.unsplash.com/photo-1645179115236-776fa645f00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },

    {
      title: 'Letters',
      url: 'https://images.unsplash.com/photo-1545038522-9bb451739ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 4;
  }
}
