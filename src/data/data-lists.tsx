export interface TabListType {
    tabKey: string;
    title: string;
}

export type SocialNetworksListType = {

    name: string;
    path: string;
};

export type projectDataList = {
    description: string;
    path: string;
};


export const tabLists = [
    { tabKey: "offer", title: "Offer" },
    { tabKey: "contacts", title: "Hire Me" },
    { tabKey: "portfolio", title: "Portfolio" },
    { tabKey: "cv", title: "CV" },
];

export const socialNetworksList = [
    { src: "icons8-facebook-24.png", name: "facebook", path: "https://www.facebook.com/profile.php?id=100010117511797" },
    { src: "icons8-gmail-24.png", name: "gmail", path: "mailto:18miller2000@gmail.com" },
    { src: "icons8-telegram-app-24.png", name: "telegram", path: "tel:380988630469" },
    { src: "icons8-linkedin-24.png", name: "linkedin", path: "https://www.linkedin.com/in/mykhailo-komnatskyi-581761280/" },
];

export const projectDataList = [
    { src: "trafalgar.jpg", description: "Trafalgar provides progressive, and affordabl healthcare, accessible on mobile and online for everyone", path: "https://miller722.github.io/Portfolio/" },
    { src: "mercedes-benz.jpg", description: "Electromobility in harmony with humanity and nature. The environmentally friendly technology of organic batteries and a well-thought-out operational strategy of the VISION AVTR", path: "https://miller722.github.io/landingMercedesBenz/" },
    { src: "heavyweight-boxers-rating.jpg", description: "Welcome to BoxingRating! Delve into our curated Top 10 heavyweight boxers list. Explore detailed biographies, stats, and insights into their careers. Join us in celebrating the elite of boxing!", path: "https://heavyweight-boxers-rating.netlify.app/" },
    { src: "my-real-estate-demo.jpg", description: "Aliquam fermentum erat eu nunc dignissim hendrerit. Praesent tellus, orci imperdiet id accumsan in, cursus eu mauris.", path: "https://my-real-estate-demo.netlify.app/" }
];





