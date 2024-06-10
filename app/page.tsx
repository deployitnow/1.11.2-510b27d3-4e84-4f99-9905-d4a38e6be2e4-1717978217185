import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { ComponentDemo } from 'demo/demo';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Fast, reliable, and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          Easy to use, easy to love
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryTextCtaSection
        title="Melodiso"
        description="Education tool for learning musical harmony"
        textPosition="left"
        withBackground
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="/signup">Get Started</a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryTextCtaSection>

      <LandingProductFeature
        title="Harmonic Excellence"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Tailored Learning Paths',
                  description:
                    'Customized educational plans that adapt to your harmony skill level and learning pace.',
                },
                {
                  title: 'Dynamic Practice Modules',
                  description:
                    'Engaging, real-time exercises and simulations to practice musical harmony.',
                },
                {
                  title: 'Progress Tracker',
                  description:
                    'Stay informed about your learning progress, pinpoint strengths, and improve weaknesses.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
      />

      <LandingProductFeature
        title="Practice Makes Perfect"
        descriptionComponent={
          <>
            <p>
              To offer a hands-on understanding of musical harmony, Melodiso
              equips you with practice sessions, quizzes, and musical exercises.
              It helps you gauge your progress, solidify your knowledge, and
              improve at a steady pace.
            </p>

            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Expert Support',
                  description:
                    'Immediate access to a team of harmony experts ready to guide you through every step.',
                },
                {
                  title: 'Rich Knowledge Base',
                  description:
                    'Extensive, readily accessible resource library covering harmonic theory and applications.',
                },
                {
                  title: 'Accessible Learning',
                  description:
                    'Learn anywhere, anytime, from any device - making harmony education truly accessible.',
                },
              ]}
            />

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
        title="Learning Analytics"
        descriptionComponent={
          <>
            <p>
              Melodiso boasts advanced learning analytics that monitor your
              continuous evolution on the platform. It identifies your
              strengths, points out the areas where you need improvement, and
              formulates a personalized learning plan to amplify your
              understanding of musical harmony.
            </p>

            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      />

      <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
              {
                imageSrc: 'https://picsum.photos/id/64/100/100',
                name: 'John Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/65/100/100',
                name: 'Jane Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/669/100/100',
                name: 'Alice Doe',
              },
            ]}
          />
        }
      />

      <LandingProductFeature
        title="Master Harmony"
        descriptionComponent={
          <>
            Collaborate with Melodiso, the reliable companion for your musical
            journey.
            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="Let's Get Musical"
        description="Step into the world of Melodiso and elevate your understanding of musical harmony beyond boundaries. Seize this exceptional learning opportunity today to make music that resonates better and sounds more harmonious. Let's get musical with Melodiso!"
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="Hear From Our Happy Learners"
          description="Get the insider perspective on what it’s like to study harmony with Melodiso. Check out reviews left by students who unlocked their full musical potential with us."
          testimonialItems={[
            {
              name: 'Anna V.',
              text: 'Melodiso made learning harmony a delightful journey. The concepts were easy to grasp and practice.',
              handle: '@anna_v.',
              imageSrc: 'https://picsum.photos/id/64/100/100',
            },
            {
              name: 'Lucas Z.',
              text: 'Before Melodiso, I was struggling with harmony. Now, I feel much more confident about composing!',
              handle: '@lucas_z.',
              imageSrc: 'https://picsum.photos/id/65/100/100',
            },
            {
              name: 'Marcus T.',
              text: 'Melodiso is the perfect blend of theory and practical learning. A fantastic tool for music enthusiasts!',
              handle: '@marcus_t.',
              imageSrc: 'https://picsum.photos/id/669/100/100',
              featured: true,
            },
            {
              name: 'Esther P.',
              text: 'What I love about Melodiso is how it simplifies complex ideas. Harmony has never been clearer.',
              handle: '@esther_p.',
              imageSrc: 'https://picsum.photos/id/829/100/100',
            },
            {
              name: 'Charlie K.',
              text: 'As a producer, understanding harmony is crucial. Thank you, Melodiso, for equipping me with the necessary knowledge.',
              handle: '@charlie_k.',
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: 'Evelyn S.',
              text: 'From a hobbyist to being in a band, Melodiso helped me level up my music skills. Highly recommended!',
              handle: '@evelyn_s.',
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title="Embrace the Art of Harmony with Melodiso"
        description="Melodiso transforms your musical journey by turning complex harmony concepts into easy, fun, and interactive learning experiences."
        featureItems={[
          {
            title: 'Tailored Learning Paths',
            description:
              'Customized educational plans that adapt to your harmony skill level and learning pace.',
            icon: <LayersIcon />,
          },
          {
            title: 'Dynamic Practice Modules',
            description:
              'Engaging, real-time exercises and simulations to practice musical harmony.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Progress Tracker',
            description:
              'Stay informed about your learning progress, pinpoint strengths, and improve weaknesses.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Expert Support',
            description:
              'Immediate access to a team of harmony experts ready to guide you through every step.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Rich Knowledge Base',
            description:
              'Extensive, readily accessible resource library covering harmonic theory and applications.',
            icon: <ZapIcon />,
          },
          {
            title: 'Accessible Learning',
            description:
              'Learn anywhere, anytime, from any device - making harmony education truly accessible.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'Community Forum',
            description:
              'Join a lively community of learners, share insights, and learn from fellow users.',
            icon: <ChromeIcon />,
          },
          {
            title: 'Interactive Tools',
            description:
              'Utilize innovative tools to visualize, listen to, and create harmonic sequences.',
            icon: <FigmaIcon />,
          },
          {
            title: 'Real-life Application',
            description:
              'Apply your harmony knowledge to real-life musical scenarios, enhancing your creativity.',
            icon: <FramerIcon />,
          },
        ]}
      />

      <LandingFaqCollapsibleSection
        title="Melodiso's Frequently-Asked Questions"
        description="Your curiosity fuels us! Here are some quick responses to queries many like yourself have harbored when first coming across Melodiso!"
        faqItems={[
          {
            question: 'What can Melodiso offer me as a budding musician?',
            answer:
              'Melodiso provides an array of interactive learning modules that help you master musical harmony. With our tool, you can practice, learn, and grow with every interaction, enabling you to grasp the fundamentals and more complex aspects of harmony in a seamless manner.',
          },
          {
            question:
              'What makes Melodiso different from other music education tools?',
            answer:
              'Melodiso focuses solely on the foundation stone of all modern music: harmony! Our unique comprehensive approach towards teaching music allows learners to feel the rhythm, understand pitch relations, and literally touch the harmony.',
          },
          {
            question:
              'How User-friendly is Melodiso to someone who is new to music?',
            answer:
              "We've designed Melodiso with simplicity in mind, ensuring it is easy to navigate even for someone without a formal background in music. Even if you are just beginning your musical journey, you'll find that Melodiso’s interface is engaging and intuitive.",
          },
        ]}
        withBackground
      />

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="ultrawide-container">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
