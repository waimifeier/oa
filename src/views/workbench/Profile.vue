<template>
    <div class="container">
        <v-sheet color="white" class="ma-auto" width="80%">
            <v-img
                    width="200"
                    :aspect-ratio="16/9" contain
                    src="../../assets/svg/undraw_random_thoughts_xejj.svg"
            ></v-img>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">完善资料</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-sheet>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data:() => ({

    }),
}
</script>
