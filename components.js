'use strict';

Vue.component('toggle-list-component', {
    props: ['list', 'item'],
    template: `
                <div class="toggle-list-component--wrapper">
                    <div class="level">
                         <div class="level-left">{{ item.item_title }}</div>
                         <button class="button is-info level-right" @click="toggle">see list</button>
                    </div>
                    
                    <ul v-if="showStores">
                        <li v-for="subitem in item.item_list">{{ subitem.cook }}</li>
                    </ul>
                </div>
       `,
    data() {
        return {
            showStores: false
        }
    },
    methods: {
        toggle: function () {
            this.showStores = !this.showStores
        }
    }
});

Vue.component('modal', {
    template: `<div class="modal is-active">
                   <div class="modal-background"></div>
                   <div class="modal-content">
                        <div class="box">
                          <slot></slot>
                        </div>
                   </div>
                   <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
               </div>
`,
});