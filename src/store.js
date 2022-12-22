import { reactive } from 'vue'

export const store = reactive({
    // Array links presenti nell'header e nel footer
    links: [
        {
            text: 'Home',
            url: '#',
            current: true
        },
        {
            text: 'Shop',
            url: '#',
            current: false
        },
        {
            text: 'About',
            url: '#',
            current: false
        },
        {
            text: 'Gallery',
            url: '#',
            current: false
        },
        {
            text: 'Locations',
            url: '#',
            current: false
        },
        {
            text: 'Journal',
            url: '#',
            current: false
        },
        {
            text: 'Contact',
            url: '#',
            current: false
        },
        {
            text: 'My Account',
            url: '#',
            current: false
        },
        {
            text: 'Orders',
            url: '#',
            current: false
        },
    ]
});