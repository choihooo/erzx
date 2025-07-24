// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('ezRx 개인정보보호방침 페이지가 로드되었습니다.');
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        // 스크롤 위치에 따른 애니메이션 효과 (선택사항)
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 테이블 행 호버 효과
    const tableRows = document.querySelectorAll('.info-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8ff';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // 이미지 로드 확인
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            console.log('이미지 로드 완료:', this.src);
        });
        
        img.addEventListener('error', function() {
            console.error('이미지 로드 실패:', this.src);
            this.style.display = 'none';
        });
    });
    
    // 페이지 로드 완료 메시지
    window.addEventListener('load', function() {
        console.log('모든 리소스 로드 완료');
    });
});

// 스크롤 부드럽게 처리
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 섹션으로 이동하는 함수 (필요시 사용)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        smoothScrollTo(section);
    }
}

// 인쇄 기능 (필요시 사용)
function printPage() {
    window.print();
}

// 다크모드 토글 (선택사항)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 반응형 메뉴 토글 (모바일용, 필요시 사용)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
} 