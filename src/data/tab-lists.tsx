export type TabListType = {
    tabKey: string;
    title: string;
};

export type SocialNetworksListType = {
    [x: string]: any;
    name: string;
    path: string;
};

export const tabLists = [
    { tabKey: "offer", title: "Offer" },
    { tabKey: "contact", title: "Hire Me" },
    { tabKey: "portfolio", title: "Portfolio" },
    { tabKey: "cv", title: "CV" },
];

export const socialNetworksList = [
    { src: "icons8-facebook-24.png", name: "faceebook", path: "https://www.facebook.com/profile.php?id=100010117511797" },
    { src: "icons8-linkedin-24.png", name: "linkedin", path: "https://www.linkedin.com/in/mykhailo-komnatskyi-581761280/" },
    { src: "icons8-gmail-24.png", name: "gmail", path: "mailto:18miller2000@gmail.com" },
    { src: "icons8-telegram-app-24.png", name: "telegram", path: "tel:380988630469" },
];


