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

  donorbox: {
    id: number;
    name: string;
    slug: string;
    currency: string;
    created_at: string;
    updated_at: string;
    goal_amt: string;
    action: string;
    formatted_goal_amount: string;
    total_raised: string;
    formatted_total_raised: string;
    donations_count: number;

    additional_questions: {
      id: number;
      question_type: string;
      question_label: string;
      default_check: boolean;
      dropdown_values: string[];
      required_checkbox: boolean;
      require_first_option: false;
      first_option_caption: string;
      question_description: string;
      list_position: null;
      screen: string;
    }[];
  };
  donorbox_id: number;
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
