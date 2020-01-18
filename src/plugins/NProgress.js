import VueProgressBar from 'vue-progressbar'
import Vue from 'vue';

const options = {
    color: '#2196f3',
    failedColor: '#f00',
    thickness: '1px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueProgressBar, options)