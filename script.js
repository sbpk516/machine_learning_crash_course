// Basic JavaScript for interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a small delay to show loading state
            this.style.opacity = '0.7';
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.opacity = '';
                this.style.transform = '';
            }, 150);
        });
    });

    // Mobile menu toggle (for future use)
    const mobileMenuToggle = document.querySelector('.nav-item:last-child');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            // Placeholder for mobile menu functionality
            console.log('Mobile menu clicked');
        });
    }

    // Add hover effects for feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Performance optimization: Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add analytics tracking (placeholder for future implementation)
    function trackEvent(eventName, properties = {}) {
        // Placeholder for analytics tracking
        console.log('Analytics Event:', eventName, properties);
    }

    // Track button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('button_click', {
                button_text: this.textContent.trim(),
                button_class: this.className,
                page: window.location.pathname
            });
        });
    });

    // Track page views
    trackEvent('page_view', {
        page: window.location.pathname,
        referrer: document.referrer
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close dropdowns
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
            });
        }
    });

    // Add focus management for accessibility
    document.querySelectorAll('.nav-item, .btn, .feature-item').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Performance monitoring
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Track load time for analytics
        trackEvent('page_load_time', {
            load_time: loadTime,
            page: window.location.pathname
        });
    });
});
