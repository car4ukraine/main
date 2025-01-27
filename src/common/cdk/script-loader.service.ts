import {inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2} from '@angular/core';
import {isPlatformServer} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private renderer: Renderer2;

  private readonly rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private readonly platformId = inject(PLATFORM_ID);

  public constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  loadScript(src: string, id: string, attributes?: { [key: string]: string }): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }
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
