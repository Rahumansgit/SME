// 3D Card Interaction Effect
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'card-3d-effect' class
  const cards = document.querySelectorAll('.card-3d-effect');
  
  cards.forEach(card => {
    // Add event listeners for mouse movement
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
  });
  
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    // The closer to the edge, the more rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
    const rotateX = -((y - centerY) / centerY) * 10; // Max 10 degrees
    
    // Apply the transformation
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }
  
  function handleMouseLeave(e) {
    const card = e.currentTarget;
    // Reset the transformation
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }
  
  function handleMouseEnter(e) {
    const card = e.currentTarget;
    // Initial slight scale effect
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1.02, 1.02, 1.02)';
  }
});

// Function to initialize the effect on dynamically loaded content
export function initCardEffect() {
  const cards = document.querySelectorAll('.card-3d-effect');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
  });
  
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }
  
  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }
  
  function handleMouseEnter(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1.02, 1.02, 1.02)';
  }
}