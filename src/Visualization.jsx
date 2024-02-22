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

    useEffect(() => {
          const container = document.getElementById('vtk-container');

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

      }, []);

    return (
          <div id="vtk-container"/>
      );
}

export default Visulaization