import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageMetaService {
  constructor(private pageTitle: Title, private pageMeta: Meta) {}

  setTitleAndDescription(title: string, description: string) {
    this.pageTitle.setTitle(title);
    this.pageMeta.updateTag({ name: 'description', content: description });
  }
}