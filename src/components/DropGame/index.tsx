import React, { useState, useEffect, useRef } from "react";
import msc from "../../assets/msc.mp3";
import "./App.css";

interface Shape {
  id: string;
  color: string;
  type: "circle" | "square" | "pentagon";
}

interface MatchedShape {
  shapeId: string;
  targetId: string;
}

const App: React.FC = () => {
  const [shapes] = useState<Shape[]>([
    { id: "1", color: "red", type: "circle" },
    { id: "2", color: "blue", type: "square" },
    { id: "3", color: "green", type: "pentagon" }, // Substituindo o hexágono pelo pentágono
  ]);

  const [targets] = useState<Shape[]>([
    { id: "4", color: "red", type: "circle" },
    { id: "5", color: "blue", type: "square" },
    { id: "6", color: "green", type: "pentagon" }, // Substituindo o hexágono pelo pentágono
  ]);

  const [matched, setMatched] = useState<MatchedShape[]>([]);
  const [showCongrats, setShowCongrats] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reproduzir a música de fundo automaticamente quando o componente for montado
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleDrop = (shapeId: string, targetId: string) => {
    const shape = shapes.find((s) => s.id === shapeId);
    const target = targets.find((t) => t.id === targetId);

    if (
      shape &&
      target &&
      shape.type === target.type &&
      shape.color === target.color
    ) {
      const newMatched = [...matched, { shapeId, targetId }];
      setMatched(newMatched);

      // Verifica se todas as formas foram associadas corretamente
      if (newMatched.length === shapes.length) {
        setShowCongrats(true);
      }
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="bg-bgAnimals flex flex-col items-center justify-center h-[50%] w-[50%] mx-auto rounded-lg shadow-2xl">
        <h1 className=" text-[#6f6657] font-quicksand text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Jogo de Associação de Cores e Formas
        </h1>

        <div className="game-board">
          <div className="shapes">
            {shapes
              .filter((shape) => !matched.some((m) => m.shapeId === shape.id))
              .map((shape) => (
                <div
                  key={shape.id}
                  className={`shape ${shape.type}`}
                  style={{ backgroundColor: shape.color }}
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("shapeId", shape.id)
                  }
                >
                  {shape.type}
                </div>
              ))}
          </div>

          <div className="targets">
            {targets.map((target) => (
              <div
                key={target.id}
                className={`target ${target.type}`}
                style={{ borderColor: "black", backgroundColor: "lightgray" }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const shapeId = e.dataTransfer.getData("shapeId");
                  handleDrop(shapeId, target.id);
                }}
              >
                {matched.some((m) => m.targetId === target.id) ? (
                  <div
                    className={`shape ${target.type}`}
                    style={{
                      backgroundColor: shapes.find(
                        (s) =>
                          s.id ===
                          matched.find((m) => m.targetId === target.id)?.shapeId
                      )?.color,
                    }}
                  />
                ) : (
                  target.type
                )}
              </div>
            ))}
          </div>
        </div>

        {showCongrats && (
          <div className="congrats-message">
            Parabéns! Você completou o jogo!
          </div>
        )}

        <audio ref={audioRef} loop>
          <source src={msc} type="audio/mp3" />
          Seu navegador não suporta a tag de áudio.
        </audio>
      </div>
    </div>
  );
};

export default App;
