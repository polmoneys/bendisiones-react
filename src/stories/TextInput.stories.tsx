import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoHeartFill as IconHeart } from "react-icons/go";

import Button from "../Dumb/Button";
import { Row } from "../Dumb/Group/Flex";
import TextInput from "../Dumb/InputText";
import { MaskedField } from "../Dumb/InputText/Masked";

const meta = {
  title: "Dumb/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  name: "Controlled",
  args: {
    id: "input-story",
    name: "input",
    placeholder: "Type something",
    onChange: (value) => console.log({ value }),
  },

  render: function Render(args) {
    const [input, setInput] = useState("");

    return (
      <Row
        style={{
          gap: "var(--gap-2)",
          alignItems: "center",
        }}
      >
        <label htmlFor="test">Search</label>

        <div className="attach-end">
          <TextInput
            {...args}
            id="test"
            value={input}
            onChange={(v) => setInput(v)}
            style={{ paddingRight: "49px" }}
          />

          <Button isIcon aria-label="Save search">
            <IconHeart size={18} />
          </Button>
        </div>
      </Row>
    );
  },
};

export const DateUtils: Story = {
  name: "Date",
  args: {
    id: "input-story",
    name: "input",
    placeholder: "Type something",
    onChange: (value) => console.log({ value }),
  },

  render: function Render() {
    return (
      <>
        <Row wrap style={{ gap: "var(--gap-2)" }}>
          <form className="dates">
            <MaskedField
              id="masked-expiry"
              label="Expiry Date (MM/YY)"
              mask="MM/YY"
              required
            />

            <MaskedField
              id="masked-date"
              label="Date of Birth (DD/MM/YYYY)"
              mask="DD/MM/YYYY"
              required
            />

            <MaskedField
              id="masked-iso"
              label="Date"
              mask="YYYY-MM-DD"
              required
            />
          </form>

          <form className="dates">
            <label htmlFor="date-input">Date</label>
            <input id="date-input" type="date" />
          </form>

          <form className="dates">
            <label htmlFor="time-input">Time</label>
            <input id="time-input" type="time" />
          </form>

          <form className="dates">
            <label htmlFor="datetime-input">Date and time</label>
            <input id="datetime-input" type="datetime-local" />
          </form>
          <form className="dates">
            <fieldset>
              {/*<legend>
                <p>Find appointment date</p>
              </legend>*/}
              <div className="dates-item">
                <label htmlFor="available-start">Start Date</label>
                <input
                  id="available-start"
                  type="date"
                  defaultValue="2026-07-01"
                />
              </div>
              <div className="dates-item">
                <label htmlFor="available-end">End Date</label>
                <input
                  id="available-end"
                  type="date"
                  defaultValue="2026-08-31"
                />
              </div>
            </fieldset>
          </form>
          <form className="dates dates-wrap">
            <fieldset>
              <legend>
                <p>When was your passport issued?</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="passport-day">Day</label>
                <input
                  id="passport-day"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{1,2}"
                  maxLength={2}
                />
              </div>
              <div className="dates-item">
                <label htmlFor="passport-month">Month</label>
                <input
                  id="passport-month"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{1,2}"
                  maxLength={2}
                />
              </div>
              <div className="dates-item">
                <label htmlFor="passport-year">Year</label>
                <input
                  id="passport-year"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{1,4}"
                  maxLength={4}
                />
              </div>
            </fieldset>
          </form>

          <form className="dates">
            <fieldset>
              <legend>
                <p>Select expiry date</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="expiry-month">Month</label>
                <select id="expiry-month">
                  <option value="1">January (1)</option>
                  <option value="2">February (2)</option>
                  <option value="3">March (3)</option>
                  <option value="4">April (4)</option>
                  <option value="5">May (5)</option>
                  <option value="6">June (6)</option>
                  <option value="7">July (7)</option>
                  <option value="8">August (8)</option>
                  <option value="9">September (9)</option>
                  <option value="10">October (10)</option>
                  <option value="11">November (11)</option>
                  <option value="12">December (12)</option>
                </select>
              </div>
              <div className="dates-item">
                <label htmlFor="expiry-year">Year</label>
                <select id="expiry-year">
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                  <option>2033</option>
                  <option>2034</option>
                  <option>2035</option>
                  <option>2036</option>
                </select>
              </div>
            </fieldset>
          </form>

          <form className="dates">
            <fieldset>
              <legend>
                <p>Select departure time</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="departure-date">I’m leaving</label>
                <select id="departure-date">
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>Sat 8 Nov</option>
                  <option>Sun 9 Nov</option>
                  <option>Mon 10 Nov</option>
                  <option>Tue 11 Nov</option>
                  <option>Wed 12 Nov</option>
                  <option>Thu 13 Nov</option>
                  <option>Fri 14 Nov</option>
                  <option>Sat 15 Nov</option>
                  <option>Sun 16 Nov</option>
                </select>
              </div>
              <div className="dates-item">
                <label htmlFor="departure-hour">Hour</label>
                <select id="departure-hour">
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option selected>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                </select>
              </div>
              <div className="dates-item">
                <label htmlFor="departure-minutes">Minutes</label>
                <select id="departure-minutes">
                  <option selected>00</option>
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                </select>
              </div>
            </fieldset>
          </form>

          <form className="dates">
            <fieldset className="dates-join">
              <legend className="label">
                <span>Date of Birth (DD/MM/YYYY)</span>
              </legend>
              <label htmlFor="masked-day" className="hidden">
                Day
              </label>
              <input
                id="masked-day"
                type="text"
                inputMode="numeric"
                placeholder="DD"
                pattern="[0-9]{1,2}"
                maxLength={2}
                required
              />
              <label htmlFor="masked-month" className="hidden">
                Month
              </label>
              <input
                id="masked-month"
                type="text"
                inputMode="numeric"
                placeholder="MM"
                pattern="[0-9]{1,2}"
                maxLength={2}
                required
              />
              <label htmlFor="masked-year" className="hidden">
                Year
              </label>
              <input
                id="masked-year"
                type="text"
                inputMode="numeric"
                placeholder="YYYY"
                pattern="[0-9]{1,4}"
                maxLength={4}
                required
              />
            </fieldset>
          </form>

          <form className="dates dates-wrap">
            <fieldset>
              <legend>
                <p>Arrange a call</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="datalist-input">
                  Preferred date or time (optional)
                </label>
                <input
                  id="datalist-input"
                  type="text"
                  list="datalist-input-list"
                  placeholder="Type or select..."
                />
                <datalist id="datalist-input-list">
                  <option value="No preference"></option>
                  <option value="Mornings (before 9am)"></option>
                  <option value="Mornings (before noon)"></option>
                  <option value="Afernoons"></option>
                  <option value="Evenings (after 6pm)"></option>
                  <option value="Weekdays (Monday to Friday)"></option>
                  <option value="Weekends (Saturday or Sunday)"></option>
                </datalist>
              </div>
            </fieldset>
          </form>
        </Row>
      </>
    );
  },
};
