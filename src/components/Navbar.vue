<template>
<div class="nav d-flex container">
        <div class="logo">
            <h1>D⩙K</h1>
        </div>
        <ul class="itemNav d-flex">
            <li>
                <a href="#">ABOUT</a>
            </li>
            <li>
                <router-link to="/shop/select_all" href="#">ALL</router-link>
            </li>
            <li>
                <a href="#">DECKS ▾</a>
                <ul>
                    <li>
                        <a href="#">SKATEBOARD</a>
                    </li>
                    <li>
                        <a href="#">LONGOBARD</a>
                    </li>
                    <li>
                        <a href="#">CRUISER BOARD</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">BRAND ▾</a>
                <ul>
                    <li>
                        <router-link to="/shop/select_magnenta">MAGNENTA</router-link>
                    </li>
                    <li>
                        <a href="#">THRASHER</a>
                    </li>
                    <li>
                        <a href="#">PALACE SKATEBOARDS</a>
                    </li>
                    <li>
                        <a href="#">GIRL SKATEBOARDS</a>
                    </li>
                    <li>
                        <a href="#">ANTI-HERO</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">EXTRA</a>
            </li>
            <li>
                <a href="#">SALES</a>
            </li>
        </ul>
        <ul class="itemNav d-flex">
            <li>
                <i class="fas fa-user"></i>
            </li>
            <li>
                <i class="fas fa-heart"></i>
            </li>
            <li>
                <i class="fas fa-shopping-cart"></i>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
};
</script>
