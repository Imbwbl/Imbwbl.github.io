<script>
    let xAxis = 0;
    let yAxis = 0;
    let isMouseInside = false;

    function handleMouseMove(event) {
        const rect = event.target.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        xAxis = (mouseX - centerX) / 40;
        yAxis = (centerY - mouseY) / 40;
    }

    function handleMouseEnter() {
        isMouseInside = true;
    }

    function handleMouseLeave() {
        isMouseInside = false;
    }
</script>

<div class="wrapper" on:mousemove={handleMouseMove}>
    <div class="container" style={`transform: rotateY(${xAxis}deg) rotateX(${yAxis}deg); transition: all 0.5s ease`}>
        <div class="card">
            <div class="pic">
                <div class="circle"></div>
                <img src="/icon.svg" alt="icon">
                <div class="title">
                    <h1>BWBL</h1>
                </div>
            </div>


        </div>
    </div>
</div>

<style>
    .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 1000px;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        transform-style: preserve-3d;
        height: auto;
        width: auto;
        border-radius: 30px;
        padding: 2rem 2rem 2rem 2rem;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    }

    .pic {
        height: 35rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pic img {
        width: 30rem;
        height: 30rem;
        z-index: 2;
        transition: all 0.75s ease-out;
        padding: 2rem 2rem 2rem 2rem;
    }

    .title {
        display: flex;
        position: relative;
        justify-content: flex-end;
        margin-right: 30px;
        font-size: 100px;
    }

</style>