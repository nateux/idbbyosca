// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Modal elements
  const partnerModal = document.getElementById("partnerModal");
  const sponsorModal = document.getElementById("sponsorModal");
  const mentorModal = document.getElementById("mentorModal");
  
  // Open modal functions
  function openPartnerModal(e) {
    e.preventDefault();
    partnerModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function openSponsorModal(e) {
    e.preventDefault();
    sponsorModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function openMentorModal(e) {
    e.preventDefault();
    mentorModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  // Close modal functions
  function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  // Event listeners
  document.getElementById("openPartnerModal")?.addEventListener("click", openPartnerModal);
  document.getElementById("openSponsorModal")?.addEventListener("click", openSponsorModal);
  document.getElementById("openMentorModal")?.addEventListener("click", openMentorModal);
  
  document.getElementById("closePartnerModal")?.addEventListener("click", () => closeModal(partnerModal));
  document.getElementById("closeSponsorModal")?.addEventListener("click", () => closeModal(sponsorModal));
  document.getElementById("closeMentorModal")?.addEventListener("click", () => closeModal(mentorModal));
  
  // Close when clicking outside modal
  window.addEventListener("click", function(event) {
    if (event.target === partnerModal) closeModal(partnerModal);
    if (event.target === sponsorModal) closeModal(sponsorModal);
    if (event.target === mentorModal) closeModal(mentorModal);
  });
  
  // Close with Escape key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModal(partnerModal);
      closeModal(sponsorModal);
      closeModal(mentorModal);
    }
  });
});