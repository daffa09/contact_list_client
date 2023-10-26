<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link
                :to="{name: 'contact.index'}"
                class="btn btn-success btn-sm rounded shadow mb-3"
                >Back</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        Add Contact
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="fomr-label">Name</label>
                                <input type="text" class="form-control" v-model="contact.name">
                                <div v-if="validation.name" class="text-danger">
                                    {{ validation.name[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="fomr-label">Age</label>
                                <input type="number" class="form-control" v-model="contact.age">
                                <div v-if="validation.age" class="text-danger">
                                    {{ validation.age[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="fomr-label">Email</label>
                                <input type="email" class="form-control" v-model="contact.email">
                                <div v-if="validation.email" class="text-danger">
                                    {{ validation.email[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="fomr-label">Phone</label>
                                <input type="number" class="form-control" v-model="contact.phone">
                                <div v-if="validation.phone" class="text-danger">
                                    {{ validation.phone[0] }}
                                </div>
                            </div>
                            <button class="btn btn-outline-primary">Submit Data</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

export default {

    setup () {
        
        // data binding
        const contact = reactive({
            name: '',
            age: '',
            email: '',
            phone: '',
        });

        const validation = ref([])

        const router = useRouter();

        function store() {
            axios.post(
                'http://localhost:8090/contact',
                contact
            )
            .then(() => {
                router.push({
                    name: 'contact.index'
                })
            }).catch((err) => {
                validation.value =  err.response.data
            });
        }

        return { 
            contact,
            validation,
            router,
            store,
        }

    }

}
</script>

<style>

</style>