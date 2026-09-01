import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout headerStyle={1} footerStyle={2} hideBreadcrumb>
      <section className="error-page">
        <div className="container">
          <div className="error-page__inner text-center">
            <div className="error-page__img float-bob-y">
              <Image src="/assets/images/resources/error-page-img1.png" alt="404 Not Found" width={903} height={524} priority />
            </div>

            <div className="error-page__content">
              <h2>Oops! Page Not Found!</h2>
              <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
              <div className="btn-box">
                <Link className="thm-btn" href="/">Back To Home <span className="icon-right-arrow"></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
