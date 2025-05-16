// Tällä tiedostolla luodaan pyörä ja siihen tarvittavat ulkonäkömuutokset

// Tuodaan tarvittavat importit
import React, {useRef, useState, useEffect} from 'react';
import confetti from 'canvas-confetti';
import styled from 'styled-components';
import {capitalize} from './capitalize';
import {Button} from './styles';

// Ohjelman tyyli

// Luodaan Popup
const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2F4F4F;
    color: #F8F8FF;
    padding: 16px 32px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 1000;
    animation: popin 1s ease-out;

    @keyframes popin {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0,5);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`

// Pyörän väri vaihtoehdot
interface Props {
    participants: string[];
}

const colors = [
    '#F0FFF0', // HoneyDew
    '#E6E6FA', // Lavender 
    '#E0FFFF', // LightCyan 
    '#FAFAD2', // LightGoldenRodYellow
    '#B0C4DE', // LightSteelBlue 
    '#F5FFFA', // MintCream
    '#FFE4E1', // MistyRose 
    '#FFEFD5', // PapayaWhip
    '#C0C0C0', // Silver
    '#D8BFD8', // Thistle 
    '#F0FFFF', // Azure
    '#F5F5DC', // Beige 
    '#DCDCDC', // Gainsboro
    '#FFFFF0', // Ivory
    '#FFF0F5', // LavenderBlush 
    '#FFFACD', // LemonChiffon 
    '#FFC0CB', // Pink 
    '#DDA0DD', // Plum 
    '#B0E0E6', // PowderBlue 
    '#BC8F8F', // RpsyBrown 
    '#D2B48C', // Tan 
    '#F5DEB3', // Wheat 
    '#FFF8DC', // Cornssilk 
];

// Ohjelman koodi
export const Wheel: React.FC<Props> = ({participants}) => {
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupWinner, setPopupWinner] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const numSectors = participants.length;

    useEffect(() => {
        if (canvasRef.current) {
            drawWheel();
        }
    }, [participants, rotation]);

    const lightColor = (color: string, amount: number): string => {
        let r = parseInt(color.slice(1,3),16);
        let g = parseInt(color.slice(3,5),16);
        let b = parseInt(color.slice(5,7),16);

        r = Math.max(0, r - amount);
        g = Math.max(0, g - amount);
        b = Math.max(0, b - amount);

        return `#${((1<<24) | (r<<16) | (g<<8) | b).toString(16).slice(1)}`
    };

    const drawWheel = () => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        const radius = canvas.width / 2;
        const sliceAngle = (2 * Math.PI) / numSectors;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(radius, radius);
        ctx.rotate(-rotation * (Math.PI / 180));

        // Luodaan sektori
        for (let i = 0; i < numSectors; i++) {
            const startAngel = i * sliceAngle;
            const endAngle = (i + 1) * sliceAngle;
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(0,0,radius,startAngel,endAngle);
            ctx.closePath();
            const color = lightColor(colors[i%colors.length],30);
            ctx.fillStyle = color;
            ctx.fill();

            // Lisätään nimi sektoriin
            ctx.save();
            ctx.rotate((startAngel + endAngle) / 2);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#050513';
            ctx.font = '16px Arial';
            ctx.shadowColor = 'rgba(0,0,0,0.7)';
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.shadowBlur = 3;
            ctx.fillText(capitalize(participants[i]) || '', radius * 0.5, 0);
            ctx.restore();
        };

            ctx.rotate(rotation * (Math.PI / 180));
            ctx.translate(-radius, -radius);

            // Luodaan osoitin
            const indicatorLength = 20;
            const indicatorWidth = 10;
            ctx.save();
            ctx.translate(canvas.width, canvas.height / 2);
            ctx.beginPath();
            ctx.moveTo(-indicatorLength, -indicatorWidth / 2);
            ctx.lineTo(0, -indicatorWidth / 2);
            ctx.lineTo(0, indicatorWidth / 2);
            ctx.lineTo(-indicatorLength, indicatorWidth / 2);
            ctx.closePath();
            ctx.closePath();
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.restore();
        };

        // Pyörän ohjelmointi
        const startSpin = () => {
            if (spinning) return;
            setSpinning(true); // Deactivoidaan pyötäytyä nappi pyöräyttämisen ajaksi

            // Määritellään pyöriminen
            const numFullRotations = Math.random() * 5 + 5 // Pyörimisen määrä 5 ja 10 välillä
            const totalRotation = numFullRotations* 360;
            const finalRotation = (rotation + (totalRotation)) % 360;

            const spinDuration = 6000;
            const easing = (t: number) => {
                return 1 - Math.pow(1 - t, 3);
            };

            let startTime: number;

            // Pyörän animaatio
            const animate = (time: number) => {
                if (!startTime) startTime = time;
                const elapsed = time - startTime; 
                const t = Math.min(elapsed / spinDuration, 1);
                const easeT = easing(t);
                const currentRotation = rotation + (totalRotation) * easeT;

                setRotation(currentRotation);

                if (elapsed < spinDuration) {
                    requestAnimationFrame(animate);
                } else {
                    setSpinning(false);
                    deterimeWinner(finalRotation);
                }
            };
            requestAnimationFrame(animate);
        };

        // Määritetään voittaja
        const deterimeWinner = (finalRotation: number) => {
            const sliceAngle = 360 / numSectors;
            const normalizedRotation = ((finalRotation % 360) + 360) % 360;
            const winningSector = Math.floor(normalizedRotation / sliceAngle);

            setPopupWinner(participants[winningSector]);
            participants.splice(winningSector,1) // Poistaa juuri voittaneen osallistujan pyörästä
            setShowPopup(true);
        };

        // Tuodaan efektit arvonna voittajalle
        useEffect(() => {
            if (showPopup) {
                startConfetti(); // Tuodaan confentti juhlinta voittajan ilmoitukseen
                const timer = setTimeout(() => setShowPopup(false), 5000) // Voittajan ilmoitus näkyvillä 5 sekunttia
                return () => clearTimeout(timer);
            }
        }, [showPopup]);

        // Luodaan confetti  juhlinta
        const startConfetti = () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6},
            });
        };

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                style={{borderRadius: '50%', border: '2px solid black'}}
             />
             <ButtonContainer>
                <Button 
                    onClick={startSpin}
                    disabled={participants.length === 0 || spinning}
                >
                    Pyöräytä
                </Button>
             </ButtonContainer>
             {showPopup && popupWinner && (
                <Popup>
                    <h2>Onnittelut!</h2>
                    <h3>{capitalize(popupWinner)}</h3>
                </Popup>
             )}
        </div>
      );
    };