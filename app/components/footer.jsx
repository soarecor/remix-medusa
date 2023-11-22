export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="mt-8 mb-4 px-8 text-base  md:text-2xl text-center">
            &copy; Copyright {currentYear} Zero Supply. All Rights Reserved.
        </div>
    )
}
