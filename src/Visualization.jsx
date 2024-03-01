import { useState, useRef, useEffect } from 'react';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkActor           from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper          from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkConeSource      from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor';
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera';

function Visulaization() {

    const vtkContainerRef = useRef(null);
    const context = useRef(null);

    useEffect(() => {
        if (!context.current) {
            const container = vtkContainerRef.current;
            // VTK renderWindow/renderer
            const renderWindow = vtkRenderWindow.newInstance();
            const renderer = vtkRenderer.newInstance();
            renderWindow.addRenderer(renderer);

            // WebGL/OpenGL imp
            const openGLRenderWindow = vtkOpenGLRenderWindow.newInstance();
            openGLRenderWindow.setContainer(container);
            openGLRenderWindow.setSize(300, 300);
            renderWindow.addView(openGLRenderWindow);

            // Interactor
            const interactor = vtkRenderWindowInteractor.newInstance();
            interactor.setView(openGLRenderWindow);
            interactor.initialize();
            interactor.bindEvents(container);

            // Interactor style
            const trackball = vtkInteractorStyleTrackballCamera.newInstance();
            interactor.setInteractorStyle(trackball);

            // Pipeline
            const cone = vtkConeSource.newInstance({ height: 1.0 });
            const actor = vtkActor.newInstance();
            const mapper = vtkMapper.newInstance();

            actor.setMapper(mapper);
            mapper.setInputConnection(cone.getOutputPort());
            renderer.addActor(actor);
            
            // Render
            renderer.resetCamera();
            renderWindow.render();

            context.current = {
                renderWindow,
                renderer,
                openGLRenderWindow,
                interactor,
                actor,
                mapper,
                cone
            };
        }
          return () => {
            if (context.current) {
              const { renderWindow, openGLRenderWindow, interactor, actor, mapper, cone } = context.current;
              actor.delete();
              mapper.delete();
              cone.delete();
              interactor.delete();
              openGLRenderWindow.delete();
              renderWindow.delete();
              context.current = null;
            }
          };

      }, [vtkContainerRef]);

    return (
          <div ref={vtkContainerRef}/>
      );
}

export default Visulaization