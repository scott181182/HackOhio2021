<template>
    <nav id="veeva-nav">
        <div class="nav-wrapper">
            <router-link id="back-link" class="btn" to="/">
                <span>← Back To Home</span>
            </router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "../assets/variables";

#veeva-nav {
    background-color: $veeva-light-gray;

    .nav-wrapper {
        padding: 0 1rem 0 1rem;
    }

    #back-link {
        background-color: $veeva-dark-blue;
        color: white;

        &>i {
            display: inline;
            margin-right: 0.5rem;
        }
    }
}
</style>
