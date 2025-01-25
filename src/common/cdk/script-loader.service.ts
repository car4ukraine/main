import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  loadScript(src: string, id: string, attributes?: { [key: string]: string }): void {
    if (!document.getElementById(id)) {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.id = id;

      // Додаємо кастомні атрибути, якщо вони вказані
      if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
          this.renderer.setAttribute(script, key, value);
        }
      }

      this.renderer.appendChild(document.body, script);
    }
  }
}
