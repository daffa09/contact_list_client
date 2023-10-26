<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link
                :to="{name: 'contact.create'}"
                class="btn btn-primary btn-sm rounded shadow mb-3"
                >Add</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        Contact List
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(contact, index) in contact.items" :key="index">
                                    <td>{{ contact.name }}</td>
                                    <td>{{ contact.age }}</td>
                                    <td>{{ contact.email }}</td>
                                    <td>{{ contact.phone }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <router-link :to="{name: 'contact.edit', params:{id:contact.id}}"
                                            class="btn btn-sm btn-outline-info">Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger"
                                            @click.prevent="destroy(contact.id, index)">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from "vue";

export default {

    setup() {
        
        // Reactive state
        let contact = ref([]);

        onMounted(() => {
             // get data from api
            axios.get('http://localhost:8090/contact')
            .then((result) => {
                contact.value = result.data
            }).catch((err) => {
                console.log(err.response);
            });
        });

        function destroy(id, index) {
            axios.delete(
                `http://localhost:8090/contact/${id}`
            )
            .then(() => {
                    contact.value.items.splice(index,1)
            }).catch((err) => {
                console.log(err.response.data)
            });
        }

        return { 
            contact,
            destroy
        }
    }

}

</script>

<style>

</style>