import React, { useState } from "react";
import { Link, useStaticQuery, graphql} from "gatsby";
import { Transition } from '@headlessui/react'
import Icon from "react-hero-icon";

export default function Nav(props){
  const [ isBlogOpen, setIsBlogOpen] = useState(false);
  const [ isDeliveryOpen, setDeliveryOpen] = useState(false);
  const [ isMobileMenu, setMobileMenu] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        favicon {
          publicURL
        }
        logo {
          publicURL
        }
        siteName
        defaultSeo {
          metaTitle
          metaDescription
        }
        mobileLogo {
          publicURL
        }
      }
      allStrapiArticle(limit: 3, sort: {fields: publishedAt, order: DESC}) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allStrapiCategory {
        nodes {
          slug
          name
          heroIconSVGOnlyPathTag
          shortDescription
        }
      }
    }
  `);

  return (
    <div className="max-w relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div id="navigation-bar" className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 px-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Markerante</span>
              <img className="h-16 w-auto" src={data.strapiGlobal.logo.publicURL} alt={data.strapiGlobal.siteName} />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
            onClick={() => setMobileMenu(trans => !trans)}
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
              onClick={ () => setIsBlogOpen(trans => !trans)}
              type="button"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
              >
                <span>Recursos</span>
                {/*
                  Heroicon name: chevron-down

                  Item active: "text-gray-600", Item inactive: "text-gray-400"
                */}
                <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Float Menu Tailwind Transition Fix */}
              <Transition
                      show={isBlogOpen}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
              >
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link to="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <Icon icon="support" className="text-red-500"/>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Software y Herramientas
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Selección del mejor softwares para restaurantes
                        </p>
                      </div>
                    </Link>

                    <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <Icon icon="user-group" className="text-red-500"/>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Comunidad
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                        Comparte tu experiencia con otros Restauranteros
                        </p>
                      </div>
                    </Link>

                    <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <Icon icon="calendar" className="text-red-500"/>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Curso de Marketing Digital para Restauranteros
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          MTY Sábado 13 de marzo 2021
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          GDL Sábado 6 de marzo 2021
                        </p>
                      </div>
                    </Link>

                    <Link to="#" className="-m-3 p-3 flex items-start rounded-lg bg-gray-50 cursor-default">
                      <Icon icon="clipboard-list" className="text-red-500"/>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-400">
                          Repartidores Independientes
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Próximamente
                        </p>
                      </div>
                    </Link>

                    <Link to="#" className="-m-3 p-3 flex items-start rounded-lg bg-gray-50 cursor-default">
                      <Icon icon="newspaper" className="text-red-500"/>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-400">
                          Directorio de Proveedores
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Próximamente
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <Link to="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                        <Icon icon="chat" />
                        <span className="ml-3">Asesoría profesional</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float Menu Tailwind Transition Fix */}
              </Transition>
            </div>

            {/* <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link> */}

            <div className="relative">
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
              onClick={ () => setDeliveryOpen(trans => !trans)}
              type="button"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                <span>Artículos</span>
                {/*
                  Heroicon name: chevron-down

                  Item active: "text-gray-600", Item inactive: "text-gray-400"
                */}
                <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Float Menu Tailwind Transition Fix */}
              <Transition
                show={isDeliveryOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
              <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {data.allStrapiCategory.nodes.map((category, i) => (
                    <Link to={`/category/${category.slug}`} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <Icon icon={category.heroIconSVGOnlyPathTag} className="text-red-500"/>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                        {category.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                        {category.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                  </div>
                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                        Artículos Recientes
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {data.allStrapiArticle.edges.map((article, i) => (
                          <li key={`article__${article.node.slug}`} className="text-base truncate">
                            <Link to={`/article/${article.node.slug}`} className="font-medium text-gray-900 hover:text-gray-700">
                              {article.node.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 text-sm">
                      <Link to="/blog" className="font-medium text-red-500 hover:text-indigo-500"> Todos los Artículos <span aria-hidden="true">&rarr;</span></Link>
                    </div>
                  </div>
                </div>
              </div>
              </Transition>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="https://www.misistemadepedidos.com/" target="_blank" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-red-100 bg-red-600 hover:bg-red-700">
              <Icon icon="external-link" className="text-red-100 mr-2"/> Sistema de Pedidos
            </Link>
          </div>
        </div>
      </div>

      {/* Float Menu Tailwind Transition Fix */}
      <Transition
      show={isMobileMenu}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      >
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-16 w-auto" src={data.strapiGlobal.mobileLogo.publicURL} alt={data.strapiGlobal.siteName} />
              </div>
              <div className="-mr-2">
                <button
                onClick={() => setMobileMenu(trans => !trans)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: x */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <Link to="https://www.misistemadepedidos.com/" target="_blank" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-red-100 bg-red-600 hover:bg-red-700">
              <Icon icon="external-link" className="text-red-100 mr-2"/> Sistema de Pedidos
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                ¿Nuevo Restaurante?
                <Link to="https://www.misistemadepedidos.com/admin/public/signup" target="_blank" className=" ml-4 text-red-500 hover:text-red-700">
                  Crear Cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </Transition>
    </div>
  );
}