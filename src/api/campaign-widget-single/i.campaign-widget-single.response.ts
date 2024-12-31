import {ICampaign} from "../campaign/i.campaign.response";

export interface ICampaignReference {
  id: number
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  campaign: ICampaign;
  localizations: string[];
}

export interface ICampaignWidgetSingleResponse {
  data: ICampaignReference[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

