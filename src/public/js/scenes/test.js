// 메인 씬
// 씬은 전역 함수로 로드, 클래스나 이후 unload가 필요한 것들은 src.~ 으로 로드
async function Main() {
    try {
        await LoadScripts([
            'js/classes/player.js'
        ]);
    } catch (e) {
        console.log(e);
    }

    // ui settings
    document.querySelector('.ui').innerHTML = `
        <div class="bgm-play" style="border: 3px solid rgba(0, 0, 0, 0.5); color: rgba(0, 0, 0, 0.5); border-radius: 10px; width: 28px; height: 28px; position: absolute; top: 10px; right: 10px; text-align: center; font-size: 20px; line-height: 24px; background: rgba(255, 255, 255, 0.5);">▶</div>
    `;

    let cam = new Camera();
    let scene = new Scene(cam);

    //#region backgrounds
    let background = new GameObject('background', 0, 0, new Sprite(['resources/background/background.webp'], 1920, 1080), undefined, scene);
    //#endregion

    let player = new src.Player('player', 0, 0, scene);

    scene.objects.background = background;
    scene.objects.player = player;

    // 씬 변경시 Game 클래스의 set scene()에 의해 자동으로 Game.Init()을 수행
    game.scene = scene;

    game.bgm.src = "resources/bgm/Magic-Clock-Shop.mp3";
    game.bgm.loop = true;
    game.bgm.volume = settings.volumes.master * settings.volumes.bgm;

    document.querySelector('div.bgm-play').onclick = function() {
        game.bgm.play();
    }
}