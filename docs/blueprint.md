# **App Name**: Nufin: Instant Loans

## Core Features:

- Hero Image Fallback: Implement error handling for hero image loading, ensuring graceful fallback to the provided URL.
- Loan Application Processing: Streamline the loan application process using customer provided details. Integrate with a service to process loan and customer information (banking information and contact methods)
- AI-Powered Approval: Employ AI algorithms to automate and expedite loan application approvals, providing near-instant decisions based on applicant data.
- Trust Bar Statistics: Dynamically display key statistics (downloads, trust, impact) in the trust bar, building confidence among users.
- Testimonials Marquee: Implement an infinite scrolling marquee to showcase user testimonials with key details.
- Legal Modal Display: Display of fully realized terms of service and privacy policy documents when the user opens them through the footer.
- GDPR compliance enforcement: Implement location recognition for each user (for instance by looking at their IP address). If a user is in the EU/UK, prevent submission of private data until consent is obtained via cookie submission and CCPA controls in the Account settings.

## Style Guidelines:

- Primary color: Electric Purple (#8E94F2), a vibrant color associated with fintech and innovation. This purple works nicely to contrast the surface and midnight color.
- Background color: Surface (#F8F7FF), providing a light and clean backdrop.
- Accent color: A slightly darker analogous tone taken from Electric Purple is Cyan (#38BDF8) which adds prominence and depth.
- Headings Font: 'Plus Jakarta Sans' (sans-serif), giving the site a crisp, high-tech aesthetic.
- Body Font: 'Inter' (sans-serif), known for its great readability.
- Use 'Lucide React' icons throughout the site for a consistent and modern feel. Choose icons with rounded corners to match the design.
- Implement glassmorphism effect using Tailwind's backdrop-blur utilities on elements like the Navbar and cards.
- Apply large rounded corners (rounded-3xl) to cards, buttons, and other prominent elements.
- Use soft shadows on cards and other UI elements to enhance depth and layering.
- Incorporate subtle animations, like fade-in effects or transitions, to create a smooth user experience.