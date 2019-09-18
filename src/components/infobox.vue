<template>
    <div class="container">
<b-container  >
    <b-row v-for="box in boxes">
        <!-- cards pic,title,detail -->
        <b-col class="result p-2"> 
            <h5>{{re.title}}</h5>
            <small>
                <a href="#">
                {{re.uri}}
                </a>
            </small><br>
                <p>{{re.snip}}</p> 
        </b-col>
    </b-row>
</b-container>
    </div>
</template>