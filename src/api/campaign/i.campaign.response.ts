export interface ICampaign {
  id: number;
  documentId: string;
  title: string;
  active: boolean;
  progress_bar_html: string;
  photo_url: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string; // TODO: Enum
}

export interface ICampaignResponse {
  data: ICampaign[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
