import { Link } from 'react-router-dom'
import Header from '../../components/header/Header.jsx'
import { useEffect, useState } from 'react'

function Home() {
  let textArray = ['subscriptions', 'licenses', 'users']

  let [index, setIndex] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length)
    }, 1500)

    return () => clearInterval(timer)
  }, [textArray.length])

  return (
    <div className="p-[50px] grid gap-[100px]">
      <Header />

      {/* Hero section */}
      <section>
        <div className="grid lg:grid-cols-12">
          <div className="col-span-4 grid items-center">
            <div className="grid gap-[50px]">
              <div className="grid gap-[20px]">
                <h1 className="text-[32px] font-medium">
                  Manage{' '}
                  <span className="text-[#0046FF]">{textArray[index]}</span>{' '}
                </h1>
                <p>Quwad — Simplifying subscription and license handling.</p>
              </div>

              <div className="grid gap-[10px]">
                <Link
                  to="/waitinglist"
                  className="py-[15px] min-w-0 w-full max-w-[300px] border border-[#D84315] rounded-[10px] text-center"
                >
                  Get started!
                </Link>
                <p>Sign up instantly—no credit card required. </p>
                <p>Our plans start at just $5.</p>
              </div>
            </div>
          </div>

          <div className="col-span-8 flex justify-end items-center">
            <div className="p-[10px] max-w-[700px] border rounded-[10px]">
              <img
                className="w-full  rounded-[10px]"
                src="/images/quwad-dashboard-image.png"
                alt="quwad dashboard image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quwad features */}
      <section>
        <div className="grid lg:grid-cols-3 gap-x-[75px] gap-y-[50px]">
          <h2 className="lg:col-span-3 text-[24px] font-medium">
            Take control of your SaaS monetization.
          </h2>

          <div className="min-h-[500px] px-[50px] py-[20px] border rounded-[10px]">
            <div className="grid gap-[50px]">
              <div className="flex justify-center">
                <div className="w-[32px]">
                  <img
                    src="/icons/angry-symbol-icon.png"
                    alt="angry symbol icon"
                  />
                </div>
              </div>
              <h3 className="font-medium text-center">
                Common Pain Points for SaaS App Owners
              </h3>
              <div>
                <ul className="grid gap-[20px]">
                  <li>
                    Spending weeks coding subscription logic from scratch.
                  </li>
                  <li>Lack of visibility into license and user activity.</li>
                  <li>
                    Slower time-to-market due to complex monetization setup.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-h-[500px] px-[50px] py-[20px] border rounded-[10px]">
            <div className="grid gap-[50px]">
              <div className="flex justify-center">
                <div className="w-[32px]">
                  <img src="/icons/leaf-icon.png" alt="leaf icon" />
                </div>
              </div>
              <h3 className="font-medium text-center">
                How Quwad Solves These Challenges
              </h3>
              <div>
                <ul className="grid gap-[20px]">
                  <li>
                    Automatic unique and secure license key generation per user.
                  </li>
                  <li>
                    Validate keys in real-time using our REST API with JWT, UUID
                    + Mongo
                  </li>
                  <li>Central dash board for full visibility and control.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-h-[500px] px-[50px] py-[20px] border rounded-[10px]">
            <div className="grid gap-[50px]">
              <div className="flex justify-center">
                <div className="w-[32px]">
                  <img
                    src="/icons/dog-with-shades-icon.png"
                    alt="dog with shades icon"
                  />
                </div>
              </div>
              <h3 className="font-medium text-center">The difference</h3>
              <div>
                <ul className="grid gap-[20px]">
                  <li>Flat, Predictable Monthly Pricing.</li>
                  <li>No Forced Upgrades or Lockouts.</li>
                  <li>
                    Scalable & Reliable Infrastructure. No overselling. No
                    slowdowns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}

      <section id="pricing">
        <div className="grid lg:grid-cols-4 gap-[50px]">
          <h2 className="lg:col-span-4 text-[24px] font-medium">Pricing.</h2>

          {/* Free tier */}
          {/* <div className="pb-[50px] grid gap-[50px] border border-[#1E2938] rounded-[10px]">
                        <div className="py-[20px] bg-[#1E2938] text-[#fff] rounded-t-[10px]">
                            <h3 className="font-medium text-center">Start for free</h3>
                            <p className="text-[12px] text-center">No credit card required</p>
                        </div>
                        <div className="flex justify-center">
                            <ul className="grid gap-[20px]">
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>1000 verifications/month.</p>
                                </li>
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>10 unique licenses.</p>
                                </li>
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>1 project.</p>
                                </li>
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>Community support.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/waitinglist" className="py-[15px] min-w-0 w-full max-w-[200px] border rounded-[10px] text-center">Sign in</Link>
                        </div>
                    </div> */}

          {/* Starter */}
          <div className="pb-[50px] grid gap-[50px] border border-[#6365EF] rounded-[10px]">
            <div className="py-[20px] bg-[#1E2938] text-[#fff] rounded-t-[10px]">
              <h3 className="font-medium text-center">Startup</h3>
              <p className="text-[12px] text-center">No credit card required</p>
            </div>
            <div className="flex justify-center">
              <ul className="grid gap-[20px]">
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>10,000 verifications/month.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>100 unique licenses.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>5 projects.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Ticket support.</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link
                to="/waitinglist"
                className="py-[15px] min-w-0 w-full max-w-[200px] border rounded-[10px] text-center"
              >
                $5 / Month
              </Link>
            </div>
          </div>

          {/* Business */}
          <div className="pb-[50px] grid gap-[50px] border border-[#6365EF] rounded-[10px]">
            <div className="py-[20px] bg-[#6365EF] text-[#fff] rounded-t-[10px]">
              <h3 className="font-medium text-center">Business</h3>
              <p className="text-[12px] text-center">No credit card required</p>
            </div>
            <div className="flex justify-center">
              <ul className="grid gap-[20px]">
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>50,000 verifications/month.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>500 licenses.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>15 projects.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Priority ticket support.</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link
                to="/waitinglist"
                className="py-[15px] min-w-0 w-full max-w-[200px] border rounded-[10px] bg-[#6365EF] text-[#fff] text-center"
              >
                $19 / Month
              </Link>
            </div>
          </div>

          {/* Life Time Deal */}
          <div className="pb-[50px] grid gap-[50px] border border-[#713DEC] rounded-[10px]">
            <div className="py-[20px] bg-[#713DEC] text-[#fff] rounded-t-[10px]">
              <h3 className="font-medium text-center">Life Time Plan</h3>
              <p className="text-[12px] text-center">Limited time offer</p>
            </div>
            <div className="flex justify-center">
              <ul className="grid gap-[20px]">
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Everything in Business plan</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Own It Forever</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>No Renewals</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Limited to first 1000</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link
                to="/waitinglist"
                className="py-[15px] min-w-0 w-full max-w-[200px] border rounded-[10px] bg-[#713DEC] text-[#fff] text-center"
              >
                $250
              </Link>
            </div>
          </div>

          {/* Enterprise */}
          <div className="pb-[50px] grid gap-[50px] border border-[#713DEC] rounded-[10px]">
            <div className="py-[20px] bg-[#713DEC] text-[#fff] rounded-t-[10px]">
              <h3 className="font-medium text-center">Enterprise</h3>
              <p className="text-[12px] text-center">No credit card required</p>
            </div>
            <div className="flex justify-center">
              <ul className="grid gap-[20px]">
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Unlimited verification's.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Unlimited licenses.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>Unlimited projects.</p>
                </li>
                <li className="flex gap-[10px]">
                  <div className="w-[24px]">
                    <img
                      className="w-full"
                      src="icons/tick-green-bg-circle-icon.png"
                      alt="tick green bg circle icon"
                    />
                  </div>
                  <p>24/7 Priority support.</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link
                to="/waitinglist"
                className="py-[15px] min-w-0 w-full max-w-[200px] border rounded-[10px] bg-[#713DEC] text-[#fff] text-center"
              >
                $99 / Month
              </Link>
            </div>
          </div>

          {/* Support */}
          {/* <div className="pb-[50px] grid gap-[50px] border border-[#713DEC] rounded-[10px]">
                        <div className="py-[20px] bg-[#713DEC] text-[#fff] rounded-t-[10px]">
                            <h3 className="font-medium text-center">Support</h3>
                            <p className="text-[12px] text-center">No credit card required</p>
                        </div>
                        <div className="flex justify-center">
                            <ul className="grid gap-[20px]">
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>Emails.</p>
                                </li>
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>Phone calls.</p>
                                </li>
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>A/V support.</p>
                                </li>
                                <li className="flex gap-[10px]">
                                    <div className="w-[24px]">
                                        <img className="w-full" src="icons/tick-green-bg-circle-icon.png" alt="tick green bg circle icon" />
                                    </div>
                                    <p>Dedicated support.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/waitinglist" className="py-[15px] min-w-0 w-full max-w-[200px] border rounded-[10px] bg-[#713DEC] text-[#fff] text-center">$5 / hour</Link>
                        </div>
                    </div> */}
        </div>
      </section>

      {/* Footer */}

      <section>
        <div className="flex justify-center">
          © {new Date().getFullYear()} Quwad — All rights reserved.
        </div>
      </section>
    </div>
  )
}

export default Home
