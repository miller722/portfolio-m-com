export interface TabListType {
    tabKey: string;
    title: string;
}

export type SocialNetworksListType = {
    [x: string]: any;
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
    { src: "icons8-linkedin-24.png", name: "linkedin", path: "https://www.linkedin.com/in/mykhailo-komnatskyi-581761280/" },
    { src: "icons8-gmail-24.png", name: "gmail", path: "mailto:18miller2000@gmail.com" },
    { src: "icons8-telegram-app-24.png", name: "telegram", path: "tel:380988630469" },
];

export const projectDataList = [
    { src: "trafalgar.jpg", description: "Trafalgar provides progressive, and affordabl healthcare, accessible on mobile and online for everyone", path: "https://miller722.github.io/Portfolio/" },
    { src: "mercedes-benz.jpg", description: "Electromobility in harmony with humanity and nature. The environmentally friendly technology of organic batteries and a well-thought-out operational strategy of the VISION AVTR", path: "https://miller722.github.io/landingMercedesBenz/" },
];





