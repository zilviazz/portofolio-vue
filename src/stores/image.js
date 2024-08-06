import { defineStore } from "pinia";

const imageStore = defineStore ({
    id: "image",
    state: () => ({
        list: [
            {
                slug: 'credit',
                title: 'CREDIT SCORING ANALYSIS',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80'
            },
            {
                slug: 'sentimen',
                title: 'SENTIMENT ANALYSIS',
                img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
                slug: 'stock',
                title: 'MONITORING STOCK OPNAME WEBSITE',
                img: 'https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FyZWhvdXNlfGVufDB8fDB8fHww'
            },
            {
                slug: 'learning',
                title: 'MATH LEARNING WEBSITE',
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aCUyMGxlYXJuaW5nfGVufDB8fDB8fHww'
            },
            {
                slug: 'figma',
                title: 'TICKET BOOKING INTERFACE DESIGN',
                img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
            },
            {
                slug: 'game',
                title: 'GAME FLAPPY FISH',
                img: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            }
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
    },

});

export default imageStore;