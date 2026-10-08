window.PF_DEFAULTS={
 "projects":[
  {"title":"Infinity Gift Store","tag":"E-commerce · Graduation project","desc":"An e-commerce site for gifts and gift wrapping: browse by occasion, product details, a gift-wrapping step, checkout, login and an admin dashboard.","role":"Front-end development","tech":"HTML, CSS, JavaScript, Bootstrap, Git, GitHub","link":"https://github.com/SaharIb/infinity_gift_store.git","img":"images/1.png"},
  {"title":"Restaurant digital experience","tag":"Design concept · Saudi restaurant","desc":"A concept for a premium Saudi restaurant website and visual identity, with AI-generated food visuals and social content.","role":"","tech":"Responsive web, AI visuals, Branding","link":"https://github.com/SaharIb/restaurant-digital-experience.git","img":""},
  {"title":"AI creative video projects","tag":"Video · AI","desc":"Short visual stories and promo videos for social media: Saudi food content, restaurant reels and product transformations.","role":"","tech":"Google Flow, Storyboarding","link":"https://github.com/SaharIb/ai-creative-videos.git","img":""},
  {"title":"Landing pages and web interfaces","tag":"Web interfaces","desc":"Responsive pages with clean layouts, good usability and tidy visual presentation.","role":"","tech":"HTML, CSS, JavaScript","link":"https://github.com/SaharIb/landing-pages.git","img":"images/hero.png"}
 ],
 "skills":[
  {"group":"Front-end","items":"HTML, CSS, JavaScript, Bootstrap, Git, GitHub, Responsive design"},
  {"group":"Creative and AI","items":"AI images, AI video, Storyboarding, Visual content, Canva, Cursor, Google Flow"},
  {"group":"Marketing","items":"Content creation, Digital marketing, Social media ideas, Audience insight"},
  {"group":"Professional","items":"Communication, Organization, Teamwork, Writing, Time management, Fast learner"}
 ],
 "links":{"email":"saharibrahem114@email.com","linkedin":"https://www.linkedin.com/in/saharibrahem","github":"https://github.com/saharIb","whatsapp":"https://wa.me/0592580913"}
};
function PF_make(DEF){
 const key='sahar_portfolio';
 return{
  key,
  load(){try{const s=JSON.parse(localStorage.getItem(key));if(s&&s.projects)return s}catch(e){}return JSON.parse(JSON.stringify(DEF))},
  save(d){try{localStorage.setItem(key,JSON.stringify(d))}catch(e){}},
  reset(){try{localStorage.removeItem(key)}catch(e){}}
 };
}
window.PF=PF_make(window.PF_DEFAULTS);