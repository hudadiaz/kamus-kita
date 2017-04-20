module ApplicationHelper
  def default_meta_tags
    {
      site: 'KamusKita',
      title: '',
      reverse: true,
      description: 'Kamus sempoi untuk bahasa borak',
      twitter: {
        card: "summary",
        title: :title,
        description: :description
      }
    }
  end

  def guest_user_id_session
    session[:guest_user_id]  
  end
end
