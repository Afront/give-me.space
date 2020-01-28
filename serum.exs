%{
  site_name: "Give Me Space",
  site_description: "A platform for creators",
  date_format: "{WDfull}, {D} {Mshort} {YYYY}",
  base_url: "/",
  author: "Afront",
  author_email: "this-is@afront.me",
  plugins: [
    {Serum.Plugins.LiveReloader, only: :dev}
  ]
}
