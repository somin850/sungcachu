function butt_to_cafe_main(
    f_name, f_location, open_time, close_time, f_image, dist, naver_place) {
    console.log('프랜차이즈 이름:', f_name);
    console.log('프랜차이즈 주소:', f_location);
    console.log('오픈 시간:', open_time);
    console.log('클로즈 시간:', close_time);
    console.log('이미지:', f_image);
    console.log('거리:', dist);
    console.log('네이버 장소:', naver_place);

    // JSON 형태로 직접 객체를 전달
    const franchiseObject = {
        f_name: f_name,
        f_location: f_location,
        open_time: open_time,
        close_time: close_time,
        f_image: f_image,
        dist: dist,
        naver_place: naver_place
    };

    const franchiseString = JSON.stringify(franchiseObject);
    console.log('전달된 프랜차이즈(JSON 형태):', franchiseString);
    window.location.href = '/main_cafe/main_cafe/cafe_main/?franchise=' + encodeURIComponent(franchiseString);
}

function butt_to_feature(
    f_name, m_name, drink_size, price, drink_type, allergy, caffeine, m_image) {

    // JSON 형태로 직접 객체를 전달
    const menuObject = {
        f_name : f_name,
        m_name: m_name,
        drink_size: drink_size,
        price: price,
        drink_type: drink_type,
        allergy: allergy,
        caffeine: caffeine,
        m_image: m_image,
    };

    const menuString = JSON.stringify(menuObject);
    console.log('전달된 메뉴(JSON 형태):', menuString);

    // URL 인코딩하여 메인 카페 페이지로 리디렉션
    window.location.href = '/main_cafe/main_cafe/feature/?menu=' + encodeURIComponent(menuString);
}

function butt_to_drink(drink_type) {
    window.location.href = '/main_cafe/main_cafe/drink/?drink_type=' + encodeURIComponent(drink_type);
}



function butt_to_main_cafe(){
    window.location.href = '/main_cafe/';
}

function butt_to(){
    window.location.href = '/main_cafe/main_cafe/feature/';
}
